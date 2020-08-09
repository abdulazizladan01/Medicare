import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _router : Router){ 
    this.loginUserData = {
      'email' : '',
      'password' : ''
    }
  }

  login(){
    if(this.loginUserData.email == "admin" && this.loginUserData.password == "password"){
      this._router.navigateByUrl('/admin');
    }else if(this.loginUserData.email == "doctor" && this.loginUserData.password == "password"){
      this._router.navigateByUrl('/admin');
    }else if(this.loginUserData.email == "nurse" && this.loginUserData.password == "password"){
      this._router.navigateByUrl('/nurse');
    }else if(this.loginUserData.email == "pharmacist" && this.loginUserData.password == "password"){
      this._router.navigateByUrl('/pharmacist');
    }
      
  }

  ngOnInit(): void {
  }

}
