import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2Component } from './table2.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Table2Component', () => {
  let component: Table2Component;
  let fixture: ComponentFixture<Table2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table2Component ],
      imports:[
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
