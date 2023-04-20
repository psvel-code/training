import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';
import { defaultUrlMatcher } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  openConfirmationDialog(name: any, classname?: string) {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: 'Are you want to delete this record ?',
        actiontype: 'Confirmation',
        name: name
      },
      width: "400px",
      autoFocus: false
    });
    return dialogRef;
  }
}
