import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { FxalignDirective } from './core/component/directive_folder/fxalign/fxalign.directive';
import { HeaderService } from './shared/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'table';
  constructor(
    private auth: AuthService,
    private header: HeaderService,
    private route: Router,
  ) { }
  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      const token = sessionStorage.getItem('currentUserToken');
      if (token) {
        this.header.setheader('default', 'Authorization', token)
      }
      return true
    }
    else {
      this.route.navigate(["/login"])
      return false
    }
  }
  //auth gurd
}
