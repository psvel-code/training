import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  constructor() { }
  count: number = 2;
  price = 20 * this.count;
  add() {
    this.count++;
    this.price = 20 * this.count;
  }
  minus() {
    if (this.count >= 1) {
      this.count--;
      this.price = 20 * this.count;
    }
  }
}
