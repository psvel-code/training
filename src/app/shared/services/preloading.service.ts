import { Injectable } from '@angular/core';
import { Route ,PreloadingStrategy} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, loadModule: Function): Observable<any> {
    return route.data && route.data['applyPreload'] ? loadModule() : of(null);
}
}
export {  };

