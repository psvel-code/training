import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BehaviorSubject, of } from 'rxjs';
class MockauthServices{
 message = new BehaviorSubject<any>({})
}
describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsComponent ],
      imports:[
        HttpClientTestingModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      providers:[
        {provide:AuthService,useClass:MockauthServices}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
