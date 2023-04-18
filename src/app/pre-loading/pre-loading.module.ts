import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreLoadingRoutingModule } from './pre-loading-routing.module';
import { PreLoadingComponent } from './pre-loading/pre-loading.component';


@NgModule({
  declarations: [
    PreLoadingComponent
  ],
  imports: [
    CommonModule,
    PreLoadingRoutingModule
  ]
})
export class PreLoadingModule { }
