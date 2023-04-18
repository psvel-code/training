import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from '../material/material.module';
import { Table2Component } from './component/table2/table2.component';
import { TooltipComponent } from './component/tooltip/tooltip.component';
import { FlexlayoutComponent } from './component/flexlayout/flexlayout.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { CounterComponent } from './component/counter/counter.component';
import { SignupComponent } from './component/signup/signup.component';
import { Task2Component } from './component/task2/task2.component';
import { FormsComponent } from './component/forms/forms.component';
import { PasswordComponent } from './component/password/password.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { HighlightPipe } from './pipe folder/highlight/highlight.pipe';
import { AppendPipe } from './pipe folder/append/append.pipe';
import { FilterPipe } from './pipe folder/filter/filter.pipe';
import { ObservableComponent } from './component/observable/observable.component';
import { FxalignDirective } from './component/directive_folder/fxalign/fxalign.directive';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    Table2Component,
    TooltipComponent,
    FlexlayoutComponent,
    HomeComponent,
    NotfoundComponent,
    CounterComponent,
    SignupComponent,
    Task2Component,
    FormsComponent,
    PasswordComponent,
    PipesComponent,
    HighlightPipe,
    AppendPipe,
    FilterPipe,
    ObservableComponent,
    FxalignDirective,
    CustomDirectiveComponent,
    LoadingComponent
  ],

  imports: [
    CommonModule,
    MaterialModule
  ],
  
  exports: [
    NavbarComponent,
    TableComponent,
    Table2Component,
    TooltipComponent,
    FlexlayoutComponent,
    HomeComponent,
    NotfoundComponent,
    CounterComponent,
    SignupComponent,
    Task2Component,
    FormsComponent
  ]
})
export class CoreModule { }
