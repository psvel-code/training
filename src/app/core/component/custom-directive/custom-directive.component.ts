import { Component } from '@angular/core';
import { FxalignDirective } from '../directive_folder/fxalign/fxalign.directive';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss'],

})
export class CustomDirectiveComponent {
  horz = "start";
  vertical = "end"
}
