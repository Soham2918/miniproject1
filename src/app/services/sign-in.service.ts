import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private userApp:HttpClient) { }

  baseUrl:any=`http://15.206.171.20:9090`

  userMa:any

  // User Login Page SignIn
  postUserlogin(body:any)
  {
    return this.userApp.post("http://15.206.171.20:9090/login",body,{responseType:"text"})
  }

}
