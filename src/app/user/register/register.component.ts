import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmailTaken } from '../validators/email-taken';
import { RegisterValidators } from '../validators/register-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  inSubmission=false;
  constructor(private auth:AuthService,private emailTaken:EmailTaken) {}

  firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email],[this.emailTaken.validate]);
  age = new FormControl<number |null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('',
    [Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11)
  ]);

  showAlert = false
  alertColor = 'blue'
  alertMsg = "droste faghat zaman bede"

  registerForm = new FormGroup({
    firstName: this.firstName,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  },[RegisterValidators.match('password','confirmPassword')]);
  async register() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = "ye zaman bede dorost beshe";
    this.inSubmission=true;
    try {
     this.auth.createUser(this.registerForm.value as IUser);

    } catch (e) {
      console.error(e);
      this.alertMsg='please ty agin register';
      this.alertColor='red';
      this.inSubmission=false
      return
    }
  this.alertMsg="sucess register";
  this.alertColor='green';
  }
}
