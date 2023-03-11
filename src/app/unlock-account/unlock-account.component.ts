import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,  } from '@angular/router';
import { UnlockService } from '../service/unlock.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

  constructor(private unlockUserServ:UnlockService, private unlockParm:ActivatedRoute, private routeLogIn:Router){
   this.unlockParm.params.subscribe(parm=>this.unlock=parm);
  }

  unlock:any

unlockForm:FormGroup=new FormGroup({
  "confirmPwd": new FormControl(),
  "email":new FormControl('',[Validators.required,Validators.email]),
  "newPwd": new FormControl(),
  "tempPwd": new FormControl()
})

  tempPwdChk=false;
  unlockUserService()
  {
    this.unlockUserServ.unlockUser(this.unlockForm.value).subscribe((res)=>{console.log(res);
    this.unlock=(res)})
  }

  pwdCheck=false;
  samePwd(){
    if(this.unlockForm.value.newPwd != this.unlockForm.value.confirmPwd){
      this.pwdCheck=true
    }
    else{
      this.pwdCheck=false
    }
  }

  tempPwd=false;
  tempPopup()
  {
    if(this.unlock=="Incorrect Temporary Password")
    {
      this.tempPwd=true
    }
    else{
      this.tempPwd=false
    }
  }

  }







