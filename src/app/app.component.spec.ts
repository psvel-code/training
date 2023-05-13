import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
class MockAuthService {
  getmsg() {
    return;
  }
}
fdescribe('AppComponent', () => {
  let fixture = TestBed.createComponent(AppComponent);
  let component = fixture.componentInstance;
  fixture.detectChanges();
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getmsg']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'table'`, () => {
    expect(component.title).toEqual('table');
  });

  it('should be call  on ngOnInit()', () => {
    expect(authServiceSpy.getmsg).toHaveBeenCalled();
  });
});
