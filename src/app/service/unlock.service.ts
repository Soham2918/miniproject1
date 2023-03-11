import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnlockService {

  constructor(private unlockServ: HttpClient) { }

  unlockUser(body:any)
  {
    return this.unlockServ.post(`http://15.206.171.20:9090/unlock`,body,{responseType:"text"})
  }

}
