import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {
  displayedColumns: string[] = ['position', 'name', 'Department', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  Department: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', Department: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', Department: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', Department: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', Department: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', Department: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', Department: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', Department: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', Department: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', Department: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', Department: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', Department: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', Department: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', Department: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', Department: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', Department: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', Department: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', Department: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', Department: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', Department: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', Department: 40.078, symbol: 'Ca' },
];
