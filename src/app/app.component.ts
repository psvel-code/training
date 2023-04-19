import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { FxalignDirective } from './core/component/directive_folder/fxalign/fxalign.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'table';
  constructor(
    private auth: AuthService
  ){}
  ngOnInit()  {
    // this.auth.getmsg();
  }
}
