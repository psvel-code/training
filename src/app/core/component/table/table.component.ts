
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
export interface PeriodicElement {
  name: string;
  position: number;
  Department: string;
  office: string;
  status: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  edit_data!: FormGroup;

  announceSortChange(arg0: any) {
    this.dataSource.sort = this.sort;
    // throw new Error('Method not implemented.');
  }
  
  constructor(
    private openDialog: MatDialog,
    private dialogservice: DialogService,
    private _snackBar: MatSnackBar,
    private snackbar_service: SnackbarService,
    private auth: AuthService
  ) { }
  

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 2, name: 'Helium', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 3, name: 'Lithium', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 4, name: 'Beryllium', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 5, name: 'Boron', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 6, name: 'Carbon', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 7, name: 'Nitrogen', Department: 'Development', office: 'Thiruneveli', status: 'Active' },
    { position: 8, name: 'Oxygen', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 9, name: 'Fluorine', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 10, name: 'Neon', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 11, name: 'Sodium', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 12, name: 'Magnesium', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 13, name: 'Aluminum', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 14, name: 'Silicon', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 15, name: 'Phosphorus', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 16, name: 'Sulfur', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 17, name: 'Chlorine', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 18, name: 'Argon', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 19, name: 'Potassium', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
    { position: 20, name: 'Calcium', Department: 'Development', office: 'Thiruneveli', status: 'InActive' },
  ];
  @Input() intervention: any;
  durationInSeconds = 3;
  displayedColumns: string[] = ['position', 'name', 'Department', 'office', 'status', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // dialog 
  @ViewChild('edit', { static: true }) delete!: TemplateRef<any>;
  //child tooltip variable
  title = 'Employee';
  message = "hello";
  action = "action";
  classname = "Default";
  color_snack: string[] = ['Default', 'Success', 'Information', 'Error', 'Warning'];

  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, ullam fugiat necessitatibus corporis, consequatur praesentium veritatis dignissimos accusamus odio delectus vel aut iste numquam iusto fuga ipsam laborum aperiam?";
  actionArray = [{ label: "ActiveEmp", value: "Active" }, { label: "InActiveEmp", value: "InActive" }];
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.auth.message.subscribe(res => {
      this.message = res;
      console.log("forms", this.message);
    });
this.edit_data = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Email: new FormControl(null),
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onEdit(element: any) {
    console.log(element);
    const dialogref = this.openDialog.open(this.delete, {
      autoFocus: false,
      width: '400px'
    });
    dialogref.afterClosed().subscribe(Response => {
      // console.log('response', Response)
      if (Response) {
        const index = this.ELEMENT_DATA.findIndex(item => item.position === element.position)
  
          this.ELEMENT_DATA.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          

      }
    })
  }
  onDelete(element: any) {
    console.log(element);
    // const dialogref = this.openDialog.open(this.delete, {
    //   autoFocus: false,
    //   width: '400px'
    // });
    // dialogref.afterClosed().subscribe(Response => {
    //   // console.log('response', Response)
    //   if (Response) {
    //     const index = ELEMENT_DATA.findIndex(item => item.position === element.position)]
    //     if (index != -1) {
    //       ELEMENT_DATA.splice(index, 1);
    //       this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //       this.dataSource.paginator = this.paginator;
    //     }
    //   }
    // })
    const dialogRef = this.dialogservice.openConfirmationDialog(this.message);
    dialogRef.afterClosed().subscribe(response => {
      console.log('response:', response);
      if (response) {
        const index = this.ELEMENT_DATA.findIndex(x => x.position === element.position);
        console.log(index);
        if (index !== -1) {
          const i = this.ELEMENT_DATA.splice(index, 1);
          console.log(i);
          this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        }
      }
    })
  }
  applyFilter(event: Event) {
    console.log((event.target));
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEmit(event: any) {
    console.log('onemit :', event);
    const filterValue = this.ELEMENT_DATA.filter(item => item.status === event.value);
    this.dataSource = new MatTableDataSource<any>(filterValue);
    this.dataSource.paginator = this.paginator;
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackbar(message: any, action: any) {
    this.snackbar_service.openSnackBar(this.classname + "_snackbar");
  }
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  //   duration:1000;
  // }
}



