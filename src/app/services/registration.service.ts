import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl:any=`http://15.206.171.20:9090`
  
  
  constructor(private register:HttpClient) { }



  getCountries(){
    return this.register.get(`${this.baseUrl}/countries`)
  }

  getStates(countryId:number){
    return this.register.get(`${this.baseUrl}/states/${countryId}`)
  }

  getCities(stateId:number){
    return this.register.get(`${this.baseUrl}/cities/${stateId}`)
  
  }

  uniqueEmailCheck(email:string){
    return this.register.get(`${this.baseUrl}/emailcheck/${email}`,{responseType:"text"})
  }

  saveUser(body:any){
    return this.register.post(`${this.baseUrl}/saveUser`,body,{responseType:"text"})
  }

 

}
