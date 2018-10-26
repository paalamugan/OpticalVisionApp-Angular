import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ForgetPassword } from 'src/app/models/forgetpassword';
import { FormBuilder, Validators } from '@angular/forms';
import {ForgetPassword_validation_messages, forgetpassValidator } from 'src/app/custom-validators/custom-validator';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
hide=true;
hide1=true;
ForgetPassword_validation_messages=ForgetPassword_validation_messages;
forgetpassword:ForgetPassword;
content_hide:boolean=false;
noRecord:string='';
  constructor(private route:ActivatedRoute, private router:Router,private loginservice:LoginService,private fb:FormBuilder,private snackbar:MatSnackBar) { }

  ngOnInit() {
    let id=this.route.snapshot.params['uuid'];
    this.loginservice.getforgetPassword(id).subscribe((data:ForgetPassword)=>{
      this.forgetpassword=data;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status==300){
          this.content_hide=true;
          this.noRecord=err.error;
          this.router.navigateByUrl('login');
        }
      }
    }
    )
  }
  UpdatePasswordForm =this.fb.group({
    tempPassword: [null,[Validators.required]],
      newPassword: ['',Validators.compose([
      Validators.minLength(5),
      Validators.required,
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
   ])
  ],
  cnfPassword: ['',Validators.compose([
      Validators.required,
      forgetpassValidator
   ])],
   fk_companyid: [''],
   uuid:['']
  })
  emptyvalue:string;
  OnChangePassword(){
    this.emptyvalue=this.UpdatePasswordForm.get('tempPassword').value;
    if(this.forgetpassword.tempPassword===this.emptyvalue){
      this.UpdatePasswordForm.setValue({
        tempPassword:this.UpdatePasswordForm.get('tempPassword').value,
        newPassword:this.UpdatePasswordForm.get('newPassword').value,
        cnfPassword:this.UpdatePasswordForm.get('cnfPassword').value,
        fk_companyid:this.forgetpassword.fk_companyid,
        uuid:this.forgetpassword.uuid
      })
this.loginservice.updateforgetPassword(this.UpdatePasswordForm.value).subscribe((data:any)=>{
  if(data.success){
    this.router.navigateByUrl('login');
  }
})
    }else{
this.snackbar.open("Temporary Password is Wrong","Alert",{
  duration:4000
})
    }
  }
}
