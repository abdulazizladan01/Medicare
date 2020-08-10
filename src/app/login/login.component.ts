import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailMessage : string;
  passwordMessage : string;
  private users$;
   loginUserData;

  constructor( private _auth : AuthService ){ 
    this.loginUserData = {
      'email' : '',
      'password' : ''
    }
  }

  login(){    
    this._auth.login(this.loginUserData);  
    //return this._auth.login().
    //subscribe(data => this.users$ = data);
  }

  ngOnInit(): void {
  }

}
