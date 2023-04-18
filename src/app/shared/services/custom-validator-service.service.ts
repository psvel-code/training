import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorServiceService {

  constructor() { }
  validatorAreEqual(forms: any) {
    if (forms.value.newPassword && forms.value.confirmPassword) {
      return forms.value.newPassword === forms.value.confirmPassword? null : forms.get('confirmPassword').setErrors({ mismatch: true });
    }
    return null;
  }
}
