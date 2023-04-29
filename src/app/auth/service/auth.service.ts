import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated() {
    let token;
    const current_user = sessionStorage.getItem('currentUserToken');
    console.log("Session_Token", current_user);

    token = current_user
    return token != null;
  }
  getToken() {
    return sessionStorage.getItem('currentUserToken');
  }
  logout() {

    sessionStorage.removeItem('currentUserToken');
    return true;
  }
}
