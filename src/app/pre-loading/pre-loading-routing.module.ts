import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoadingComponent } from './pre-loading/pre-loading.component';

const routes: Routes = [
  {path:'pre-loading',component:PreLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreLoadingRoutingModule { }
