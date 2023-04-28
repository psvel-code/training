
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
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
    private auth: AuthService,
    private employee: EmployeeService,
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('edit', { static: false }) delete!: TemplateRef<any>; // dialog 
  @Input() intervention: any;

  ELEMENT_DATA!: any[];
  durationInSeconds = 3;
  displayedColumns: string[] = ['id', 'name', 'mail', 'DesignationId', 'RoleId', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  title = 'Employee';  //child tooltip variable
  message = "hello";
  action = "action";
  classname = "Default";
  id !: number;
  mode!: string;
  color_snack: string[] = ['Default', 'Success', 'Information', 'Error', 'Warning'];
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium, ullam fugiat necessitatibus corporis, consequatur praesentium veritatis dignissimos accusamus odio delectus vel aut iste numquam iusto fuga ipsam laborum aperiam?";
  // actionArray = [{ label: "ActiveEmp", value: "Active" }, { label: "InActiveEmp", value: "InActive" }];

  ngOnInit() {
    this.employee.getEmployee().subscribe((res: any) => {
      // console.log('employee table', res.response);
      this.ELEMENT_DATA = res.response;
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    });

    this.auth.message.subscribe(res => {
      this.message = res;
      console.log("forms", this.message);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDelete(element: any) {
    // console.log(element);
    const dialogRef = this.dialogservice.openConfirmationDialog(element.name);
    dialogRef.afterClosed().subscribe((response: any) => {
      console.log('response:', response);
      if (response) {
        this.employee.deleteEmployee({ id: element.id }).subscribe((res: any) => {
          const index = this.ELEMENT_DATA.findIndex(x => x.id === element.id)
          if (res.response) {
            this.ELEMENT_DATA.splice(index, 1);
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
            this.dataSource.paginator = this.paginator;
          }
          const snackbar = this.snackbar_service.openSnackBar("table_undo", "Data deleted").afterDismissed().subscribe(() => {
            let undo = element;
            this.employee.createEmployee(undo).subscribe((res: any) => {
              this.snackbar_service.openSnackBar("Success_snackbar", "Data undo sucessfully")
              this.ELEMENT_DATA.splice(index, 0, undo);
              this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;
              console.log('undo', res);
            });
          })
        });
      }
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

      // if (response) {
      //   const index = this.ELEMENT_DATA.findIndex(x => x.position === element.position);
      //   console.log(index);
      //   if (index !== -1) {
      //     const i = this.ELEMENT_DATA.splice(index, 1);
      //     console.log(i);
      //     this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      //     this.dataSource.paginator = this.paginator;
      //     // this.dataSource.sort = this.sort;
      //   }
      // }
    });
  }
  applyFilter(event: Event) {
    console.log((event.target));
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEmit(event: any) {
    const filterValue = this.ELEMENT_DATA.filter(item => item.status === event.value);
    this.dataSource = new MatTableDataSource<any>(filterValue);
    this.dataSource.paginator = this.paginator;
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  snackbar(message: any, action: any) {
    this.snackbar_service.openSnackBar(this.classname + "_snackbar", message);
  }
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  //   duration:1000;
  // }
}



