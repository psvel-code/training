import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message = new BehaviorSubject<any>(null);
  constructor(private http: HttpRoutingService) { }
  getmsg() {
    console.log("authservice", this.http.getJson('message.json').subscribe(res => {
      // console.log("Response", res);
      this.message.next(res);
      // console.log("msg", this.message);
    })
    );
  }

  

  getToken(): string {
    let token;
    const currentUser = sessionStorage.getItem('currentUserToken')
    return token;
  }

  getRefreshToken() {
    const currentUser = JSON.parse(
      sessionStorage.getItem('currentUserToken') || ''
    );
    const refreshToken = currentUser ? currentUser.refreshToken : null;
    return this.http.postMethod('refreshToken', { refreshToken });
  }
}

