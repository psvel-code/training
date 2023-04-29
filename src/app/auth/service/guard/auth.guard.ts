import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth: AuthService,
    private route: Router,
    private headerService: HeaderService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthenticated()) {
      const token = this.auth.getToken();
      if (token) {
        this.headerService.setheader('default', 'Authorization', token)
      }
      return true
    }
    else {
      this.route.navigate(["/signin"])
      return false
    }
  }

}
