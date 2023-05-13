import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
class MockSnackBar{
  openFromComponent(){
    return 
  }
}
describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:MatSnackBar,useClass:MockSnackBar}
      ]
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
