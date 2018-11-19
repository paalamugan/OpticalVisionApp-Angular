import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Utils } from 'src/app/utils';
import { CompanySignup } from 'src/app/models/companysignup';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  
  company:CompanySignup;
  doj:Date;
  dob:Date;
employee:Employee=new Employee('','','','','','','',this.doj,this.dob,'','','',this.company);
Identifier:string;
username:string;
companyname:string;
userimage:any;
constructor(private loginservice:LoginService,private router:Router) { }
  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:any)=>{
      if(data.Identifier=="employee" || data.Identifier=="employee-admin"){
       this.userimage=Utils.APIURL+data.userImage;
        this.Identifier=data.Identifier;
        this.username=data.username;
        this.companyname=data.companyname;
        this.employee=data.employee;
      }else{
          this.router.navigateByUrl('login');
      }
     
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
    );
  }

}
