import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map, observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidationService {

  constructor() { }
  
  static asyncEmailValidation(employeeService: EmployeeService, id?: number): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return timer(500).pipe(switchMap(() => {
        return employeeService.checkEmail(control.value, id).pipe(map((res: any) => {
          return res && res['emailExist'] ? { emailExist: true } : null;
        }));
      }));
    };
  }
}
