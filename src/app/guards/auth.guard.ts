import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from '../utils';
import { LoginService } from '../services/login.service';
import { Admin } from '../models/admin';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor(private router:Router,private auth:AuthService ){
   
  }

  canActivate():boolean{
    if(Utils.loggedIn() && this.auth.isLoggedIn=='admin'){
      return true;
    }
    else{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
    // this.loginservice.getUserName().subscribe((data:Admin)=>{
    //   this.Identifier=data.Identifier;
    //   console.log(data.Identifier);
    
    // });
    // if(this.Identifier=="admin" ||this.Identifier=="employee"){
    //   return true;
    // }else{
    //   localStorage.removeItem('token');
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
  canActivateChild():boolean{
   
    if(Utils.loggedIn() && (this.auth.isLoggedIn=='employee' || this.auth.isLoggedIn=='admin')){
      return true;
    }
    else{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
