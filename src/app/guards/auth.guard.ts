import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from '../utils';
import { LoginService } from '../services/login.service';
import { Admin } from '../models/admin';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private router:Router){
   

  }

  canActivate():boolean{
   if(Utils.loggedIn()){
      return true;
    }
    else{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild():boolean{
   
    if(Utils.loggedIn()){
      return true;
    }
    else{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }
  // canLoad():boolean{
  //   if(Utils.loggedIn()){
  //     return true;
  //   }
  //   else{
  //     localStorage.removeItem('token');
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}