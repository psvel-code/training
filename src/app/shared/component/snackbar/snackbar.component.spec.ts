import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
class MockSnackBarRef{
}
class MockSnackBarData{

}
describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarComponent ],
      imports:[
        MatSnackBarModule,
        MatIconModule,
      ],
      providers:[
        {provide:MatSnackBarRef,useClass:MockSnackBarRef},
        {provide:MAT_SNACK_BAR_DATA,useClass:MockSnackBarData}

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
