import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private logInserv:SignInService,private welcome:Router){}

  signData:any
  logInUserForm:FormGroup=new FormGroup(
    {
      'email': new FormControl(),
      'pwd': new FormControl(),
    }
  )

  msgValid=false

  logInU()
  {
  this.logInserv.postUserlogin(this.logInUserForm.value).subscribe((res)=>{console.log(res);
  this.signData=res;

  if(this.signData=="Invalid Credentials"){
    alert("invalid credentials")
  }
  else if(this.signData=="SUCCESS"){
    alert("routing to welcome page")
    this.welcome.navigate(['home'])

   
  }
  else{
    alert('unlock the User')
  }
})



  }

  


  

}
