import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { CompanySignup } from 'src/app/models/companysignup';
import { Utils } from 'src/app/utils';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private signupService:SignupService,private loginservice:LoginService,private router:Router,private snackBar:MatSnackBar) { }
company:CompanySignup=new CompanySignup('','',1,'','','','','','','');
currentCompany:CompanySignup=new CompanySignup('','',1,'','','','','','','');
profile:Admin=new Admin('','','','','',this.company);
userimage:any;
currentpassword:string;
Identifier:string;
hide:boolean=true;
eyeicon:boolean=true;
profiledetails:string="Admin Profile Details";
passwordDisabled:boolean=true;
countfilelength:number;
adminshow_1:boolean=false;
adminshow_2:boolean=true;
  selectedfile:File=null;
  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="admin"){
        this.Identifier=data.Identifier;
        this.profile=data;
        this.userimage=Utils.APIURL+this.profile.company.userImage;
          this.currentpassword=this.profile.company.password;
      }else{
        this.router.navigateByUrl('login');
      }
     
    });
   
  }
  editProfile(){
    this.signupService.getOne(this.profile.company).subscribe((resultData:CompanySignup)=>{
      this.currentCompany=resultData;
      this.adminshow_2=false;
    this.adminshow_1=true;
    this.profiledetails="Edit Profile Details"
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status==300 || err.status===401){
        this.router.navigateByUrl('login');
        }
      }
    }
    )
    
    
  }
  password_error:boolean=false;
  OnChangePassword(){
    this.passwordDisabled=!this.passwordDisabled;
    if(this.passwordDisabled==true){
      this.currentCompany.password=this.currentpassword;
      this.eyeicon=true;
      this.password_error=false;
    }else{
      this.currentCompany.password="";
      this.eyeicon=false;
      this.password_error=true;
    }
    
  }
  passwordtextchanged(event){
    if(this.currentCompany.password === ""){
      this.password_error=true;
     
    }else{
      this.password_error=false;
    }
  }
  onFileChange(event){
    this.countfilelength=event.target.files.length;
    this.selectedfile=<File>event.target.files[0];
   
   
    
  }
  UpdateProfile(){
    let formData=new FormData;
    if(this.countfilelength >0){
      if(this.selectedfile.type==="image/jpeg" || this.selectedfile.type==="image/png"){
        formData.append('userImage', this.selectedfile);
        formData.append('companyname', this.currentCompany.companyname);
        formData.append('username', this.currentCompany.username);
       formData.append('tin', this.currentCompany.tin);
        formData.append('email', this.currentCompany.email);
        formData.append('password', this.currentCompany.password);
        formData.append('address', this.currentCompany.address);
        formData.append('phonenumber', this.currentCompany.phonenumber);
        formData.append('companyId',this.currentCompany.uuid);
        this.signupService.UpdateFormDataCompany(formData,this.currentCompany.uuid).subscribe(
          (resultData:any)=>{
            this.router.navigateByUrl('login');
          },
          (err)=>{
            console.log(err);
                    }
          );
         }else{
this.snackBar.open("Select Only Jpeg and Png format Image","Alert",{
  duration:4000
})
         }
      
    }else{
      this.signupService.UpdateCompany(this.currentCompany).subscribe(
        (resultData:any)=>{
        this.router.navigateByUrl('login');
        },
        (err)=>{
console.log(err);
        }
        );
    }
    
  }
  back(){
    this.adminshow_2=true;
    this.adminshow_1=false;
    this.profiledetails="Admin Profile Details";
  }
}
