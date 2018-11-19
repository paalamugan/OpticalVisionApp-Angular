import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CompanySignup } from 'src/app/models/companysignup';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { MatSnackBar, MatDatepickerInputEvent, MatInput } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  dob:Date;
  doj:Date;
  hiddenDOJ:boolean=true;
  hide=true;
  styleOne:boolean;
  selectedfile:File=null;
  companysignup:CompanySignup;
  employee:Employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
  today = new Date();
  minDate = new Date(this.today);
  @ViewChild('nameInput') nameInput: MatInput;
@ViewChild('nameSelect') nameSelect: ElementRef;
  constructor(private employeeservice:EmployeeService,private loginservice:LoginService,private authservice:AuthService,private router:Router,private snackBar:MatSnackBar) { }

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
      if(data.Identifier==="admin"||data.Identifier==="employee-admin"){
        this.companysignup=data.company;
        this.employee.adminAccess="No";
      }else{
        this.router.navigateByUrl('login');
      }
      },
    (err)=>{
      if(err instanceof HttpErrorResponse){
       if(err.status === 401){
          this.router.navigateByUrl('login');
        }
      }
     }
     );
    }
  countfilelength:number;
  addEvent(event: MatDatepickerInputEvent<Date>){
    var dobdate=event.value.getFullYear()+18;
    this.minDate = new Date(dobdate, 0, 1);
    this.hiddenDOJ=false;
  }
  onFileChange(event) {
   this.styleOne=true;
   this.countfilelength=event.target.files.length;
    this.selectedfile=<File>event.target.files[0];
    }

  OnSubmit(){
    if(this.employee.DOB === undefined){
    this.authservice.getDummuyValue(this.employee).subscribe((data:any)=>{
      this.snackBar.open("Fill DOB Date Field",'Alert' ,{
        duration:4000
     });
     this.employee=data;
    })
    }else if(this.employee.DOJ === undefined){
      this.authservice.getDummuyValue(this.employee).subscribe((data:any)=>{
        this.snackBar.open("Fill DOJ Date Field",'Alert' ,{
          duration:4000
       });
       this.employee=data;
       var CDOB=new Date(data.DOB);
       this.employee.DOB=CDOB;
      })
    }
    else{
     this.employee.companySignUp=this.companysignup;
   let formData=new FormData;
    if ( this.countfilelength > 0) { 
      if(this.selectedfile.type==="image/jpeg" || this.selectedfile.type==="image/png"){
        console.log("file",this.selectedfile);
      formData.append('userImage', this.selectedfile);
       formData.append('employeeName', this.employee.employeeName);
       formData.append('mobileNumber', this.employee.mobileNumber);
      formData.append('employeeEmail', this.employee.employeeEmail);
       formData.append('employeePassword', this.employee.employeePassword);
       formData.append('address', this.employee.address);
      formData.append('DOB', this.employee.DOB.toUTCString());
       formData.append('DOJ', this.employee.DOJ.toUTCString());
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
         this.nameInput.focus();
          this.employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
         },
         (err)=>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 300){
                this.snackBar.open(err.error.error,'Alert' ,{
                  duration:3000
               });
               this.employee=err.error.data;
               var DOBDate = new Date(err.error.data.DOB);
               var DOJDate = new Date(err.error.data.DOJ);
               this.employee.DOB=DOBDate;
               this.employee.DOJ=DOJDate;
               this.styleOne=true;
               this.nameInput.focus();
              const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
               setTimeout(function() {  nameselect.select(); }, 50);
            }else if(err.status === 401){
              this.router.navigateByUrl('login');
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
     formData.append('DOB', this.employee.DOB.toUTCString());
      formData.append('DOJ', this.employee.DOJ.toUTCString());
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
        this.nameInput.focus();
        this.employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
       // this.employee=this.employee;
        },
        (err)=>{
         if(err instanceof HttpErrorResponse){
           if(err.status === 300){
               this.snackBar.open(err.error.error,'Alert' ,{
                 duration:3000
              });
              this.employee=err.error.data;
              var DOBDate = new Date(err.error.data.DOB);
              var DOJDate = new Date(err.error.data.DOJ);
              this.employee.DOB=DOBDate;
              this.employee.DOJ=DOJDate;
               this.nameInput.focus();
               const nameselect=<HTMLInputElement>this.nameSelect.nativeElement;
               setTimeout(function() {  nameselect.select(); }, 50);
           }else if(err.status === 401){
            this.router.navigateByUrl('login');
           }
         }
        }
        
        );
    }
  }
}
}
