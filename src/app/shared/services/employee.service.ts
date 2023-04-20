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
    return this.gethttp.getMethod(this.appUrl + 'v1/');
  }
  getRole() {
    return this.gethttp.getRole(this.appUrl + 'v1/');
  }
}
