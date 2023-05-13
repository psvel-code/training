import { TestBed } from '@angular/core/testing';

import { HttpRoutingService } from './http-routing.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
let isRes = false;
class MockHttpClient{
  get(){
  if(isRes){
    return of({})
  }
  else{
    return throwError({Error:{error:'httpClientError'}})
  }
}
}
describe('HttpRoutingService', () => {
  let service: HttpRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpClient,useClass:MockHttpClient}
      ]
    });
    service = TestBed.inject(HttpRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
