import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Login_detail!: FormGroup;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.Login_detail = new FormGroup({
      mail: new FormControl(null, Validators.required,),
      password: new FormControl(null, Validators.required,),
    })
  }
  token = 'retyuiodxcvbn6789o0p';
  user = {
    mail: 'vel',
    password: "2312"
  };
  signin() {
    if (this.Login_detail.value.mail == this.user.mail && this.Login_detail.value.password == this.user.password) {
      sessionStorage.setItem('currentUserToken', JSON.stringify({ token: this.token }))
      this.router.navigate(['app/home']);
    }
  }
}