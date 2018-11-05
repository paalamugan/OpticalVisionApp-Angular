import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import{ passValidator,account_validation_messages } from '../custom-validators/custom-validator';
import { SignupService } from '../services/signup.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
  hide = true;
  account_validation_messages=account_validation_messages;
  styleOne:boolean;
  selectedfile:File=null;
  isLoadingResults:boolean=false;
  //RegistrationForm: FormBuilder;
  constructor(private router:Router,private elem: ElementRef,private fb:FormBuilder,private signupservice:SignupService,private snackbar:MatSnackBar,private cd: ChangeDetectorRef) {

    // this.Registeration = new FormGroup({
    //   companyName: new FormControl(null, Validators.required),
    //   tinNumber: new FormControl(null, Validators.required),
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.email),
    //   password: new FormControl(null, Validators.required),
    //   cnfPassword: new FormControl(null, this.passValidator),
    //   address: new FormControl(null, Validators.required),
    //   phoneNumber: new FormControl(null, Validators.required)
    // });
    // this.Registeration.controls.password.valueChanges
    //   .subscribe(
    //     x => this.Registeration.controls.cnfPassword.updateValueAndValidity()
    //   );
   }
  
    RegistrationForm =this.fb.group({
  companyName: ['',[Validators.required]],
  tinNumber: [''],
  userName: ['',Validators.compose([
		Validators.maxLength(25),
		Validators.minLength(3),
		Validators.pattern('^[a-zA-Z_ ]*$'),
		Validators.required
	])],
  email: ['',Validators.compose([
  	Validators.required,
  	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ])
],
  password: ['',Validators.compose([
    Validators.minLength(5),
    Validators.required,
    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
 ])
],
  cnfPassword: ['',Validators.compose([
    Validators.required,
    passValidator
 ])],
  address: ['',[Validators.required]],
  phoneNumber: ['',Validators.compose([
    Validators.required,
    Validators.minLength(10),
    Validators.pattern('^[0-9]*$') //this is for the number with  validation
 ])],
})
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
  }
  countfilelength:number;
  onFileChange(event) {
   // let count=<File>event.target.files
   this.styleOne=true;
   this.countfilelength=event.target.files.length;
     this.selectedfile=<File>event.target.files[0];
    
     
    // console.log(this.selectedFile)
    // let inputEl: HTMLInputElement = this.elem.nativeElement.querySelector('#file-7');
    // console.log(inputEl.files.item(0));
   // this.RegistrationForm.getValue('photo').value
    // const reader = new FileReader();
 
    // if(event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
  
    //   reader.onload = () => {
    //     this.RegistrationForm.patchValue({
    //       file: reader.result
    //    });
      
    //     // need to run CD since file load runs outside of zone
    //     this.cd.markForCheck();
    //   };
    // }
  }
  signUp(){
   let formData = new FormData();
    this.isLoadingResults = true;
        if ( this.countfilelength > 0) { 
          if(this.selectedfile.type==="image/jpeg" || this.selectedfile.type==="image/png"){
            formData.append('userImage', this.selectedfile);
            formData.append('companyName', this.RegistrationForm.value.companyName);
            formData.append('tinNumber', this.RegistrationForm.value.tinNumber);
            formData.append('userName', this.RegistrationForm.value.userName);
            formData.append('email', this.RegistrationForm.value.email);
            formData.append('password', this.RegistrationForm.value.password);
            formData.append('cnfPassword', this.RegistrationForm.value.cnfPassword);
            formData.append('address', this.RegistrationForm.value.address);
            formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
            this.signupservice.submitRegister(formData)
            .subscribe(
              (response)=>{
                this.styleOne=false;
                // this.RegistrationForm.reset(true);
                //  this.selectedfile=null;
                  this.snackbar.open("Registration Success", "Success", {
                  duration: 2000,
                        });
                  this.isLoadingResults = false;
                this.router.navigate(['/login']);
              },
             
            (err)=>{
              if(err instanceof HttpErrorResponse){
                if(err.status === 300){
                    this.snackbar.open(err.error,'Alert' ,{
                      duration:3000
                   });
                   this.isLoadingResults = false;
                }else{
                  this.snackbar.open(err.statusText,'Alert' ,{
                    duration:3000
                 });
                 this.isLoadingResults = false;
                }
              }
            }
            );
          }else{
            this.snackbar.open("Select Only Jpeg and Png format Image", "Alert", {
              duration: 3000,
                    });
                    this.isLoadingResults = false;
          }
               
               
        }else{
          formData.append('userImage', this.selectedfile);
          formData.append('companyName', this.RegistrationForm.value.companyName);
          formData.append('tinNumber', this.RegistrationForm.value.tinNumber);
          formData.append('userName', this.RegistrationForm.value.userName);
          formData.append('email', this.RegistrationForm.value.email);
          formData.append('password', this.RegistrationForm.value.password);
          formData.append('cnfPassword', this.RegistrationForm.value.cnfPassword);
          formData.append('address', this.RegistrationForm.value.address);
          formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
          this.signupservice.submitRegister(formData)
          .subscribe(
            (response)=>{
              this.styleOne=false;
              // this.RegistrationForm.reset(true);
              //  this.selectedfile=null;
                this.snackbar.open("Registration Success", "Success", {
                duration: 2000,
                      });
                this.isLoadingResults = false;
              this.router.navigate(['/login']);
            },
           
          (err)=>{
            if(err instanceof HttpErrorResponse){
              if(err.status === 300){
                  this.snackbar.open(err.error,'Alert' ,{
                    duration:3000
                 });
                 this.isLoadingResults = false;
                }
              }
        }
        );
      }
     
    }
    movetologin(){
    this.router.navigate(['/login']);
    }

  
  
}
