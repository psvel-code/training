import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { DialogService } from 'src/app/shared/services/dialog.service';

export abstract class FormCanDeactivate {
  // @return {boolean}
  abstract canDeactivate(): boolean
}

@Injectable({
  providedIn: 'root'
})


export class CanDeactiveGuardGuard {
  constructor(private dialog: DialogService) { }

  canDeactivate(
    component: FormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!component.canDeactivate) {
      return new Observable((observer: Observer<boolean>) => {
        const dialogref = this.dialog.openConfirmationDialog("Are you want to close this page ?");
        dialogref.afterClosed().pipe(filter((result: boolean) => {
          return result
        })).subscribe((res) => {
          observer.next(true);
          observer.complete();
        });
      });

    }
    else {
<<<<<<< HEAD
      console.log(" else  canDeactivate");
=======
>>>>>>> 2474530e9a5f6849a8f8de76b511085ff0becf5d
      return true;
    }

  }
}
