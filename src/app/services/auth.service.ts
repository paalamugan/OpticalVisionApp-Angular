import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private loggedIn='';
  constructor(private httpClient:HttpClient) { 
    
  }
  setLoggedIn(value:string){
    this.loggedIn=value;
  }
   get isLoggedIn(){
return this.loggedIn;
   }
   public getDummuyValue(body:any){
    return this.httpClient.post(`${Utils.getDummyURL()}`,body);
  }
}
