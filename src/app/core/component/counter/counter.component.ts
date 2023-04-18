import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  title = 'counter';
  count = 0;

  plus(){
   this.count++;
  }
  minus(){
    this.count--;
  }
}
