import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router ){}

  canActivate():boolean{
    if(Utils.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild():boolean{
    if(Utils.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
