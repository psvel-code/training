import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  appUrl = environment.app_url;

  constructor(
    private gethttp: HttpRoutingService,
  ) { }

  getDesignation() {
    return this.gethttp.getMethod(this.appUrl + 'v1/getDesignation');
  }
  getRole() {
    return this.gethttp.getMethod(this.appUrl + 'v1/getRole');
  }
  createEmployee(data: any) {
    return this.gethttp.createEmployee(this.appUrl + 'v1/createEmployee', data);
  }
  getEmployee() {
    return this.gethttp.getMethod(this.appUrl + 'v1/getEmployees');
  }
  deleteEmployee(data: any) {
    return this.gethttp.deleteEmployee(this.appUrl + 'v1/deleteEmployee', data);
  }
}
