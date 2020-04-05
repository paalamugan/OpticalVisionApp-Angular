import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Utils } from '../utils';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private loginservice:LoginService,private router:Router) {
    console.log("data coming");
    
   }
}
