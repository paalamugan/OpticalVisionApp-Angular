import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';
import { LoginService } from './login.service';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 loggedIn:boolean;
  
  constructor(private httpClient:HttpClient,private loginservice:LoginService,private router:Router) { 
    
  }
  // setLoggedIn(value:string){
  //   this.loggedIn=value;
  //       }
   public getDummuyValue(body:any){
    return this.httpClient.post(`${Utils.getDummyURL()}`,body);
  }
  public getLoggedIn():boolean{
    this.httpClient.get(`${Utils.getUserNameURL()}`).subscribe((data:Admin)=>{
     if(data.Identifier==="admin" || data.Identifier==="employee-admin"){
    
     }else{
       this.router.navigateByUrl('login');
     }
    })
    return true;
    
  }
}
