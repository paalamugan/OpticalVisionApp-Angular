import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AdminLogin,EmployeeLogin } from '../models/login';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

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
  constructor(private router: Router,private loginservice:LoginService,private snackBar:MatSnackBar) {
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
    this.loginservice.adminLogin(this.adminlogin)
    .subscribe(
     (res:any)=>{
       localStorage.setItem('token',res.token);
       this.router.navigate(['/optical/dashboard']);
       
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
