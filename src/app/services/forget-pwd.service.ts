import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPwdService {

  constructor(private fgtPwd:HttpClient) { }

  frgtPwd(id:any){
    return this.fgtPwd.get(`http://15.206.171.20:9090/forgotPwd/${id}`,{responseType:"text"})
  }

  uniqueEmail(email:any){
    return this.fgtPwd.get(`http://15.206.171.20:9090/emailcheck/${email}`,{responseType:"text"})
  }
}
