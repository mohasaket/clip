import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creadentials={
    email:'',
    password:''
  }

showAlert=false
alertMsg="please waite are log"
alertColor='blue'
inSubmission=false

  constructor(private auth:AngularFireAuth) { }

  ngOnInit(): void {
  }
  async login(){
    this.showAlert=true
    this.alertMsg="please waite are log"
    this.alertColor='blue'
    this.inSubmission=true
   try {
    await this.auth.signInWithEmailAndPassword(
      this.creadentials.email,this.creadentials.password
    )
   } catch (e) {
    this.alertMsg="try another time"
    this.alertColor='red'
   }
   this.alertMsg="success login"
   this.alertColor='green'
  }

}
