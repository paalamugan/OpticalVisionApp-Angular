import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CompanySignup } from 'src/app/models/companysignup';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  dob:Date=new Date();
  doj:Date=new Date();
  hide=true;
  styleOne:boolean;
  selectedfile:File=null;
  companysignup:CompanySignup;
  employee:Employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
  constructor(private employeeservice:EmployeeService,private loginservice:LoginService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    ;( function ( document, window, index )
    {
      var inputs = document.querySelectorAll( '.inputfile' );
      Array.prototype.forEach.call( inputs, function( input )
      {
        var label	 = input.nextElementSibling,
          labelVal = label.innerHTML;
    
        input.addEventListener( 'change', function( e )
        {
          var fileName = '';
          if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
          else
            fileName = e.target.value.split( '\\' ).pop();
    
          if( fileName )
            label.querySelector( 'span' ).innerHTML = fileName;
          else
            label.innerHTML = labelVal;
        });
    
        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
      });
    }( document, window, 0 ));

    this.loginservice.getUserName().subscribe((data:Admin)=>{
      this.companysignup=data.company;
    });
  }
  countfilelength:number;
  onFileChange(event) {
   // let count=<File>event.target.files
   this.styleOne=true;
   this.countfilelength=event.target.files.length;
     this.selectedfile=<File>event.target.files[0];
    
     
   
  }

  OnSubmit(){
   
    this.employee.companySignUp=this.companysignup;
   let formData=new FormData;
    if ( this.countfilelength > 0) { 
      if(this.selectedfile.type==="image/jpeg" || this.selectedfile.type==="image/png"){
      formData.append('userImage', this.selectedfile);
       formData.append('employeeName', this.employee.employeeName);
       formData.append('mobileNumber', this.employee.mobileNumber);
      formData.append('employeeEmail', this.employee.employeeEmail);
       formData.append('employeePassword', this.employee.employeePassword);
       formData.append('address', this.employee.address);
      formData.append('DOB', this.employee.DOB.toLocaleDateString());
       formData.append('DOJ', this.employee.DOJ.toLocaleDateString());
       formData.append('adminAccess',this.employee.adminAccess);
       formData.append('uuid',this.employee.companySignUp.uuid);
       this.employeeservice.addEmployee(formData)
       .subscribe(
         (response)=>{
          this.styleOne=false;
          this.selectedfile=null;
          
          this.snackBar.open("Employee successfully Added",'Ok' ,{
            duration:3000
         });
         this.employee=this.employee;
        //  this.employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
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
         
         );
        }else{
          this.snackBar.open("Select Only Jpeg and Png format Image", "Alert", {
            duration: 3000,
                  });
        }
    }else{
      formData.append('userImage', this.selectedfile);
      formData.append('employeeName', this.employee.employeeName);
      formData.append('mobileNumber', this.employee.mobileNumber);
     formData.append('employeeEmail', this.employee.employeeEmail);
      formData.append('employeePassword', this.employee.employeePassword);
      formData.append('address', this.employee.address);
     formData.append('DOB', this.employee.DOB.toLocaleDateString());
      formData.append('DOJ', this.employee.DOJ.toLocaleDateString());
      formData.append('adminAccess',this.employee.adminAccess);
      formData.append('uuid',this.employee.companySignUp.uuid);
      this.employeeservice.addEmployee(formData)
      .subscribe(
        (response)=>{
         this.styleOne=false;
         this.selectedfile=null;
         this.snackBar.open("Employee successfully Added",'Ok' ,{
           duration:3000
        });
        this.employee=this.employee;
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
        
        );
    }
  }
}
