
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
    private employee: EmployeeService

  ) { }


  ELEMENT_DATA!: any[];
  @Input() intervention: any;
  durationInSeconds = 3;
  displayedColumns: string[] = ['name', 'mail', 'DesignationId', 'RoleId', 'Action'];
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
    this.employee.getEmployee().subscribe((res: any) => {
      console.log('employee table', res.response);
      this.ELEMENT_DATA = res.response;
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    });

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
    // console.log(element);
    const dialogRef = this.dialogservice.openConfirmationDialog(element.name);
    dialogRef.afterClosed().subscribe((response: any) => {
      console.log('response:', response);
      if (response) {
        this.employee.deleteEmployee({ id: element.id }).subscribe((res: any) => {
          console.log('delete response', res);
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



