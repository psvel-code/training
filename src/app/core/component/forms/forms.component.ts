import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  employee_detail!: FormGroup
  work = "App Developer";
  designation = [
    { id: 1, name: "Software developer" },
    { id: 2, name: "Web developer" },
    { id: 3, name: "Android developer" }
  ];
  role = [
    { id: 1, name: "Super Admin" },
    { id: 2, name: "Admin" },
    { id: 3, name: "Employee" }
  ];
  user = "employee";
  mode: string = "normal";
  msg!: Observable<any>;

  constructor(private auth: AuthService) { }
  message: any
  ngOnInit(): void {
    this.msg = this.auth.message;
    this.auth.message.subscribe(res => {
      this.message = res;
      console.log("forms", this.message);
    })
    this.employee_detail = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      Email: new FormControl(null),
      AlterEmail: new FormControl(null),
      Dob: new FormControl(null),
      Doj: new FormControl(null),
      designation: new FormControl(null),
      role: new FormControl(null),
      contacts: new FormArray([]),
    });
    this.createArray();
    console.log("forms", this.message);

  }
  onSubmit() {
    console.log(this.employee_detail);
  }
  getContacts() {
    return (this.employee_detail.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }
  createArray() {
    (this.employee_detail?.get('contacts') as FormArray).push(new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(null),
      state: new FormControl(null),
      pincode: new FormControl(null),
    }));
  }
  removeArray(i: number) {
    (this.employee_detail.get('contacts') as FormArray).removeAt(i)
  }
  onChange(e: any) {
    this.user = e.value;
    console.log(this.user);
    if (this.user == 'admin') {
      this.employee_detail.addControl('admin', new FormControl('', Validators.required));
    }
    else {
      this.employee_detail.removeControl('admin');
    }
  }
  onChange2(a: any) {
    this.mode = a.value;
    console.log(this.mode);
    if (this.mode == 'view') {
      this.employee_detail.disable();
    }
    else if (this.mode == 'edit') {
      this.employee_detail.enable();
      this.employee_detail.get('firstName')?.disable();
    }
    else {
      this.employee_detail.enable();
    }
  }
}
