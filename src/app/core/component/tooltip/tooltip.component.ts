import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() actionArray!: any[];
  @Output() actionEmit = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {

  }
  onActionEmit(event: any) {
    console.log('onemit :', event);
    this.actionEmit.emit(event);
  }

}


