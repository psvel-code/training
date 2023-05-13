import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard {
  user = [
    { id: 1, url: '/app/loading' },
    // { id: 2, url: '/app/observables' },
    { id: 3, url: '/app/pipes' },
    { id: 4, url: '/app/forms' },
    { id: 5, url: '/app/table' },
    { id: 6, url: '/app/home' },
  ]
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const index = this.user.findIndex(x => x.url === state.url);
    if (index > -1)
      return true;
    else {
      alert('You have no Access');
      return false;
    }
  }
}
