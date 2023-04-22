import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;

  constructor(private _snackBar: MatSnackBar) { }
  // message: any, action: any, duration: number, horizontalPosition: any, verticalPosition: any,
  openSnackBar(classname: any, message: any) {
    let data = [
      { name: "Success_snackbar", icon: "done" },
      { name: "Error_snackbar", icon: "error" },
      { name: "Warning_snackbar", icon: "warning" },
      { name: "Information_snackbar", icon: "info" },
      { name: "Default_snackbar", icon: "verified" },
      { name: "table_undo", icon: "undo" },

    ];
    let mydata = data.find((val) => { return val.name == classname; })

    const snackBarRef = this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        // action: action,
        header: mydata?.name,
        icon: mydata?.icon
      },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: classname
    });

  }
}
