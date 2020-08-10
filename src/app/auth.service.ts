import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string;

  constructor(private _router : Router, private _http : HttpClient){ 
    this.loginUrl = "./assets/Users.json";
  }

  login(loginUserData){
    if(loginUserData.email == "admin" && loginUserData.password == "password"){
      this._router.navigateByUrl('/admin');
    }else if(loginUserData.email == "doctor" && loginUserData.password == "password"){
      this._router.navigateByUrl('/admin');
    }else if(loginUserData.email == "nurse" && loginUserData.password == "password"){
      this._router.navigateByUrl('/nurse');
    }else if(loginUserData.email == "pharmacist" && loginUserData.password == "password"){
      this._router.navigateByUrl('/pharmacist');
    }
    
    //console.log(loginUserData);
    //return this._http.get<any[]>(this.loginUrl);
  }
}
