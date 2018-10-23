import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AdminLogin,EmployeeLogin } from '../models/login';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  emailname:string;
  adminlogin:AdminLogin=new AdminLogin('','');
  employeelogin:EmployeeLogin=new EmployeeLogin('','');
adminhide:boolean=true;
  constructor(private router: Router,private loginservice:LoginService,private auth:AuthService,private snackBar:MatSnackBar) {
  }

  ngOnInit() {
   
  }

  admin(){
  this.adminhide=true;
  }
  employee(){
this.adminhide=false;
  }
  loginAdmin() {
    this.loginservice.adminLogin(this.adminlogin)
      .subscribe(
       (res:any)=>{
         localStorage.setItem('token',res.token);
         this.router.navigate(['/optical/dashboard']);
         this.auth.setLoggedIn('admin');
       },
       err =>{
         if(err instanceof HttpErrorResponse){
           if(err.status === 401){
               this.snackBar.open(err.error,'Alert' ,{
                 duration:3000
              });
           }
         }
        
       }
      );
  }
  loginEmployee() {
    this.loginservice.employeeLogin(this.employeelogin)
    .subscribe(
     (res:any)=>{
       localStorage.setItem('token',res.token);
        this.router.navigate(['/optical/employees']);
        this.auth.setLoggedIn('employee');
     },
     err =>{
       if(err instanceof HttpErrorResponse){
         if(err.status === 401){
             this.snackBar.open(err.error,'Alert' ,{
               duration:3000
            });
         }
       }
      
     }
    );
}
  signup(){
    this.router.navigate(['/register']);
  }
}
