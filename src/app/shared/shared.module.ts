import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './component/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { LoadingComponent } from './component/loading/loading.component';
@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    SnackbarComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class SharedModule { }
