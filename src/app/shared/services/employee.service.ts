import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  user: any;
  constructor(
    private http: HttpRoutingService,
  ) { }

  getDesignation() {
    return this.http.getMethod('getDesignation');
  }
  getRole() {
    return this.http.getMethod('getRole');
  }
  createEmployee(data: any) {
    return this.http.postMethod('createEmployee', data);
  }
  updateEmployee(data: any) {
    return this.http.postMethod('updateEmployee', data);
  }
  getEmployee() {
    return this.http.getMethod('getEmployees');
  }
  deleteEmployee(data: any) {
    return this.http.postMethod('deleteEmployee', data);
  }
  getOneEmployee(data: any) {
    return this.http.postMethod('getOneEmployee', data);
  }
  checkEmail(email: string, id: number | undefined) {
    const data = { email: email, id: id ? id : null };
    return this.http.postMethod('checkEmail', data);
  }
  Login(data: any) {
    return this.http.postMethod('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        // this.user.next(res['user']);
        console.log("token", data.token);

        sessionStorage.setItem('currentUserToken', data.token)
      }
      return res;
    }), catchError(err => {
      return throwError(err)
    }));

  }
}



// pipe(map((res: any) => {
//     if (res && res['user'] && res['token']) {
//       this.user.next(res['user']);
//       sessionStorage.setItem('currentUserToken', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
//     }
//     return res;
//   }), catchError(err => {
//     return throwError(err)
//   }));

// }
// getToken(): string {
//   let token;
//   const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
//   if (currentUser) {
//     token = currentUser.token;
//   }
//   return token;
// }

// getRefreshToken() {
//   const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
//   const refreshToken = currentUser ? currentUser.refreshToken : null;
//   return this.httpRoutingService.postMethod('refreshToken', { refreshToken })
// }
