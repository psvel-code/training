import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  appUrl = environment.app_url;

  constructor(
    private http: HttpRoutingService,
  ) { }

  getDesignation() {
    return this.http.getMethod('v1/getDesignation');
  }
  getRole() {
    return this.http.getMethod('v1/getRole');
  }
  createEmployee(data: any) {
    return this.http.postMethod('v1/createEmployee', data);
  }
  updateEmployee(data: any) {
    return this.http.postMethod('v1/updateEmployee', data);
  }
  getEmployee() {
    return this.http.getMethod('v1/getEmployees');
  }
  deleteEmployee(data: any) {
    return this.http.postMethod('v1/deleteEmployee', data);
  }
  getOneEmployee(data: any) {
    return this.http.postMethod('v1/getOneEmployee', data);
  }
}
