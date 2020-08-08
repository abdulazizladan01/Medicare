import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailMessage : string;
  passwordMessage : string;
   loginUserData;

  constructor(){ 
    this.loginUserData = {
      'email' : '',
      'password' : ''
    }
  }

  login(){
      console.log(this.loginUserData)
  }

  ngOnInit(): void {
  }

}
