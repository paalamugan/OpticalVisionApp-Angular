import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private loggedIn='admin';
  constructor() { 
    
  }
  setLoggedIn(value:string){
    this.loggedIn=value;
  }
   get isLoggedIn(){
return this.loggedIn;
   }
}
