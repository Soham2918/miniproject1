import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
data: any;

  constructor(private regSer:RegistrationService, private actRouteReg:ActivatedRoute, private rotueToLogin:Router )
  {
    this.actRouteReg.params.subscribe((res)=>console.log(res))
    this.getCountriesServ();
  }

  regSerdata:any
  country:any
  state:any
  city:any
  email:any
  

  regSerForm:FormGroup=new FormGroup({
    cityId: new FormControl(),
    countryId:new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    fname:new FormControl(),
    gender:new FormControl(),
    lname: new FormControl(),
    phno:new FormControl(),
    stateId: new FormControl(),
   })

  getCountriesServ(){
    this.regSer.getCountries().subscribe((res)=>{
      console.log(res);
      this.country=(res)})
  }

  getStatesServ(countryId:number): void
  {
    this.regSer.getStates(countryId).subscribe((res)=>{
      console.log(res);
      (this.state=(res))})
  }

  getCitiesServ(stateId:number){
    this.regSer.getCities(stateId).subscribe((res)=>{
      console.log(res);
      this.city=(res)})
  }

  validateEmail=false
  uniqueEmailCheckServ(email:string){
    this.regSer.uniqueEmailCheck(this.regSerForm.value.email).subscribe((res)=>{
      console.log(res);
      this.email=res;

      if(this.email=='DUPLICATE'){
        this.validateEmail=true
      }
      else{
        this.validateEmail=false
      }

  })
  }

  loadSpinner=false
  saveData:any
  validateForm=false
  saveUserServ()
  {
    this.loadSpinner=true
    this.regSer.saveUser(this.regSerForm.value).subscribe((res)=>{
      console.log(res)
      this.saveData=res
      this.loadSpinner=false;

      if(this.saveData=="Please check your Inbox for unlocking your account"){
        alert('Please check your Inbox for unlocking your account')
      }

      else{
        alert('Please check the data entered')

      }

    })

  }

  onReset(data:FormGroup)
  {
    data.reset()
  }

}

