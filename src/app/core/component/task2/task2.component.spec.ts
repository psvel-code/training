import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2Component } from './task2.component';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Task2Component', () => {
  let component: Task2Component;
  let fixture: ComponentFixture<Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Task2Component],
      imports: [
        MatInputModule,
        MatSelectModule,
        MatDividerModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment the count and update the price', () => {
    const initialCount = component.count;
    // const initialPrice = component.price;
    component.add();

    expect(component.count).toBe(initialCount + 1);
    expect(component.price).toBe(20 * component.count);
  });
  it('should Derement the count and update the price', () => {
    const initialCount = component.count;
    // const initialPrice = component.price;
    component.minus();

    expect(component.count).toBe(initialCount - 1);
    expect(component.price).toBe(20 * component.count);
  });

  
});
