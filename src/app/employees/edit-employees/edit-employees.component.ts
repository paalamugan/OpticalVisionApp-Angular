import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Employee } from 'src/app/models/employee';
import{ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { CompanySignup } from 'src/app/models/companysignup';
@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent implements OnInit {
  dob:Date;
  doj:Date;
DOBtoString:string;
DOJtoString:string;
  hide=true;
  styleOne:boolean;
  selectedfile:File=null;
  companysignup:CompanySignup;
  newpassword:boolean=true;
  newpasswordvalue:string="";
  currentpassword:string="";
  // constructor( private dialogRef: MatDialogRef<EditEmployeesComponent>, @Inject(MAT_DIALOG_DATA) public data: Employee) { }
  constructor(private route:ActivatedRoute, private employeeservice:EmployeeService,private router:Router,private snackBar:MatSnackBar){}
  employee:Employee=new Employee("","",'','','','','',this.dob,this.doj,'','','',this.companysignup);
  countfilelength:number;
  onFileChange(event) {
    // let count=<File>event.target.files
    this.styleOne=true;
    this.countfilelength=event.target.files.length;
      this.selectedfile=<File>event.target.files[0];
      
    
   }
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
    let id =this.route.snapshot.params['id'];
    this.employeeservice.getemployee(id).subscribe(
(data:Employee)=>{
  this.employee=data;
  this.currentpassword=this.employee.employeePassword;
  this.dob=this.employee.DOB;
  this.doj=this.employee.DOJ;
}

    )
   
  }
  
  OnChangePassword(){
this.newpassword=!this.newpassword;

  }
  OnSubmit(){
    let formData=new FormData;
    if(this.newpasswordvalue!=""){
      this.employee.employeePassword=this.newpasswordvalue;
    }else{
      this.employee.employeePassword=this.currentpassword;
    }
    if(this.dob!=this.employee.DOB){
this.DOBtoString=this.employee.DOB.toLocaleDateString();
    }else{
      this.DOBtoString=JSON.stringify(this.employee.DOB);
    }
    if(this.doj!=this.employee.DOJ){
      this.DOJtoString=this.employee.DOJ.toLocaleDateString();
          }else{
            this.DOJtoString=JSON.stringify(this.employee.DOJ);
          }
    if(this.countfilelength >0){
      if(this.selectedfile.type==="image/jpeg" || this.selectedfile.type==="image/png"){
      formData.append('userImage', this.selectedfile);
      formData.append('employeeName', this.employee.employeeName);
      formData.append('mobileNumber', this.employee.mobileNumber);
     formData.append('employeeEmail', this.employee.employeeEmail);
      formData.append('employeePassword', this.employee.employeePassword);
      formData.append('address', this.employee.address);
     formData.append('DOB', this.DOBtoString);
      formData.append('DOJ', this.DOJtoString);
      formData.append('adminAccess',this.employee.adminAccess);
      formData.append('fk_companyid',this.employee.fk_companyid);
      formData.append('employeeId',this.employee.employeeId);
      this.employeeservice.updateformdataEmployee(formData,this.employee.uuid).subscribe(
        (resultData:Employee)=>{
         this.router.navigate(['optical/employees/listemployees']);
        }
        );
      }else{
          this.snackBar.open("Select Only Jpeg and Png format Image","Alert",{
            duration:3000
})
      }
    }else{
      this.employeeservice.updateemployee(this.employee).subscribe(
           (resultData:Employee)=>{
            this.router.navigate(['optical/employees/listemployees']);
           }
           );
    }
  
   
   
  }
}
