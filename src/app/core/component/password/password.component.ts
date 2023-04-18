import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorServiceService } from 'src/app/shared/services/custom-validator-service.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  constructor(private customValidate: CustomValidatorServiceService) { }
  passwordForm!: FormGroup;
  ngOnInit() {
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    }, this.customValidate.validatorAreEqual.bind(this)
    )
  }

  onSubmit() { }
}
