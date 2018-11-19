import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AdminLogin,EmployeeLogin } from '../models/login';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
declare var $: any;
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
        this.router.navigate(['/optical/dashboard']);
         localStorage.setItem('token',res.token);
       },
       err =>{
         if(err instanceof HttpErrorResponse){
           if(err.status === 300){
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
       if(res.Identifier === "employee-admin"){
        this.router.navigate(['/optical/dashboard']);
        localStorage.setItem('token',res.token);
        // localStorage.setItem('Identifier',res.Identifier_User);
        }else{
        this.router.navigate(['/optical/employees']);
        localStorage.setItem('token',res.token);
        
        // this.auth.setLoggedIn(res.Identifier);
       }
        
     },
     err =>{
       if(err instanceof HttpErrorResponse){
         if(err.status === 300){
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
  showNotification(from, align){
    const type = ['primary'];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "Email has been sent to ur mail, Check ur Mail.."

    },{
        type: type[0],
         timer: 3000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon backgroundcolor" role="alert">' +
          '<i data-notify="dismiss" class="material-icons cursor" style="margin: 8px;">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message" style="position: relative;bottom:6px;">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
  forgetPassword(){
    if(this.adminlogin.email != ""){
      this.loginservice.forgetPassword(this.adminlogin)
      .subscribe(
        (data:any)=>{
          if(data.success === true){
            this.showNotification('top','center');
          }
          this.adminlogin.email=null;
          this.adminlogin.password=null;
      },
      (err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 300){
              this.snackBar.open(err.error,'Alert' ,{
                duration:3000
             });
          }
        }
      }
      )
    }else{
      this.snackBar.open('Email Field is Not Empty','Alert',{
        duration:3000
      })
      
    }
  }
}
