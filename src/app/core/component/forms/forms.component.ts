import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  employee_detail!: FormGroup
  work = "App Developer";
  designation: any;
  role: any;
  user = "employee";
  mode: string = "normal";
  msg!: Observable<any>;

  constructor(
    private auth: AuthService,
    private employee: EmployeeService
  ) { }
  message: any
  ngOnInit(): void {
    this.msg = this.auth.message;
    this.auth.message.subscribe(res => {
      this.message = res;
      // console.log("forms", this.message);
    });

    this.employee.getDesignation().subscribe((res: any) => {
      console.log('forms designation', res.designation);
      this.designation = res.designation;
    });

    this.employee.getRole().subscribe((res: any) => {
      console.log('forms Role', res.role);
      this.role = res.role;
    });

    this.employee_detail = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Email: new FormControl(null),
      AlterEmail: new FormControl(null),
      Dob: new FormControl(null),
      Doj: new FormControl(null),
      designation: new FormControl(null),
      role: new FormControl(null),
      contacts: new FormArray([]),
    });
    this.createArray();
    // console.log("forms", this.message);
  }
  onSubmit() {
    console.log(this.employee_detail);
  }
  getContacts() {
    return (this.employee_detail.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }
  createArray() {
    (this.employee_detail?.get('contacts') as FormArray).push(new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(null),
      state: new FormControl(null),
      pincode: new FormControl(null),
    }));
  }
  removeArray(i: number) {
    (this.employee_detail.get('contacts') as FormArray).removeAt(i)
  }
  onChange(e: any) {
    this.user = e.value;
    console.log(this.user);
    if (this.user == 'admin') {
      this.employee_detail.addControl('admin', new FormControl('', Validators.required));
    }
    else {
      this.employee_detail.removeControl('admin');
    }
  }
  onChange2(a: any) {
    this.mode = a.value;
    console.log(this.mode);
    if (this.mode == 'view') {
      this.employee_detail.disable();
    }
    else if (this.mode == 'edit') {
      this.employee_detail.enable();
      this.employee_detail.get('firstName')?.disable();
    }
    else {
      this.employee_detail.enable();
    }
  }
}
