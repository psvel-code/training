import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private employee: EmployeeService) { }
  ngOnInit() {
    console.log("home");

    setTimeout(() => {
      this.employee.getDesignation().subscribe((res) => {
        console.log("home", res);
      });
    })

  }
}
