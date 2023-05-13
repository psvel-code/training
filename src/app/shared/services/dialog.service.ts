import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) { }
  openConfirmationDialog(message: any, classname?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: message.delete,
        actiontype: 'Confirmation',
      },
      width: "400px",
      autoFocus: false
    });
    return dialogRef;
  }
}
