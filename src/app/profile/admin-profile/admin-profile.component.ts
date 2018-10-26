import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { CompanySignup } from 'src/app/models/companysignup';
import { Utils } from 'src/app/utils';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private signupService:SignupService,private loginservice:LoginService,private router:Router) { }
company:CompanySignup=new CompanySignup('','',1,'','','','','','','');
profile:Admin=new Admin('','','','','',this.company);
userimage:any;
currentpassword:string;
hide:boolean=true;
eyeicon:boolean=true;
profiledetails:string=" Edit Profile Details";
passwordDisabled:boolean=true;
countfilelength:number;
  selectedfile:File=null;
  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier=="admin"){
        this.profile=data;
        this.currentpassword=this.profile.company.password;
        this.userimage=Utils.APIURL+this.profile.userImage;
        console.log(data);
      }else{
        this.router.navigateByUrl('login');
      }
     
    });
  }
  password_error:boolean=false;
  OnChangePassword(){
    this.passwordDisabled=!this.passwordDisabled;
    if(this.passwordDisabled==true){
      this.profile.company.password=this.currentpassword;
      this.eyeicon=true;
      this.password_error=false;
    }else{
      this.profile.company.password="";
      this.eyeicon=false;
      this.password_error=true;
    }
    
  }
  passwordtextchanged(event){
    if(this.profile.company.password === ""){
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
      formData.append('userImage', this.selectedfile);
      formData.append('companyname', this.profile.company.companyname);
      formData.append('username', this.profile.company.username);
     formData.append('tin', this.profile.company.tin);
      formData.append('email', this.profile.company.email);
      formData.append('password', this.profile.company.password);
      formData.append('address', this.profile.company.address);
      formData.append('phonenumber', this.profile.company.phonenumber);
      formData.append('companyId',this.profile.company.uuid);
      this.signupService.UpdateFormDataCompany(formData,this.profile.company.uuid).subscribe(
        (resultData:any)=>{
          this.router.navigateByUrl('login');
        console.log(resultData);
        },
        (err)=>{
          console.log(err);
                  }
        );
    }else{
      this.signupService.UpdateCompany(this.profile.company).subscribe(
        (resultData:any)=>{
        console.log(resultData);
        this.router.navigateByUrl('login');
        },
        (err)=>{
console.log(err);
        }
        );
    }
    
  }
  
}
