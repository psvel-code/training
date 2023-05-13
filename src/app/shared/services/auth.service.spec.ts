import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpRoutingService } from './http-routing.service';
import { of, throwError } from 'rxjs';
let Isres=true;
class MockHttpRoutingService{
  getJson(){
    if(Isres){
      return of({})
    }
    else{
      return throwError({error:{error:'test'}})
    }
  }
}
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpRoutingService,useClass:MockHttpRoutingService}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
