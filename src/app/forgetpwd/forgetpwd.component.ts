import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetPwdService } from '../services/forget-pwd.service';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent {

  constructor(private fgtPwdSer:ForgetPwdService, private routeLogin:Router){

  }

  pwdEmail:any

forgetPwd:FormGroup=new FormGroup({
  emailId:new FormControl(),
})



fgtPWDServC(){
  this.fgtPwdSer.frgtPwd(this.forgetPwd.value.emailId).subscribe((res)=>console.log(res))
}

loader=false;
validator=false
uniqueEmailSer(){

  this.loader=true
  this.fgtPwdSer.uniqueEmail(this.forgetPwd.value.emailId).subscribe((res)=>{
    console.log(res);
    this.pwdEmail=res;

    this.loader=false

    if(this.pwdEmail=='UNIQUE')
    {
      this.validator=true ;   
      
    }
    else{
      this.validator=false;
      alert('We have sent password to your email, please Sign In ')
      this.loader=false
      this.routeLogin.navigate(['signin'])
      
    }

  })

}




}
