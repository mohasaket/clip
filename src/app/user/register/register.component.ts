import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  inSubmission=false;
  constructor(private auth: AngularFireAuth) {}
  firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
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
    phonNumber: this.phoneNumber,
  });
  async register() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = "ye zaman bede dorost beshe";
    this.inSubmission=true;
    const { email,password } = this.registerForm.value;
    try {
      const userCred = await this.auth.createUserWithEmailAndPassword(
        email as string, password as string
      )
      console.log(userCred);
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
