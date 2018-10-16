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
   selectedFile:File=null;
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
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
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
    Validators.pattern('^[0-9]*$') //this is for the letters (both uppercase and lowercase) and numbers validation
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

  onFileChange(event) {
    console.log(event);
    // this.selectedFile=<File>event.target.files[0];
    // console.log(this.selectedFile)
    
    
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
    // const fd=new FormData();
    // fd.append('photo',this.selectedFile,this.selectedFile.name);
    // console.log(fd);
    // this.RegistrationForm.patchValue({
    //   photo:fd
    // })
    let inputEl: HTMLInputElement = this.elem.nativeElement.querySelector('#file-7');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
        console.log(inputEl);
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('userImage', inputEl.files.item(0));
                formData.append('companyName', this.RegistrationForm.value.companyName);
                formData.append('tinNumber', this.RegistrationForm.value.tinNumber);
                formData.append('userName', this.RegistrationForm.value.userName);
                formData.append('email', this.RegistrationForm.value.email);
                formData.append('password', this.RegistrationForm.value.password);
                formData.append('cnfPassword', this.RegistrationForm.value.cnfPassword);
                formData.append('address', this.RegistrationForm.value.address);
                formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
                console.log(formData);
        }else{
                formData.append('userImage', null);
                formData.append('companyName', this.RegistrationForm.value.companyName);
                formData.append('tinNumber', this.RegistrationForm.value.tinNumber);
                formData.append('userName', this.RegistrationForm.value.userName);
                formData.append('email', this.RegistrationForm.value.email);
                formData.append('password', this.RegistrationForm.value.password);
                formData.append('cnfPassword', this.RegistrationForm.value.cnfPassword);
                formData.append('address', this.RegistrationForm.value.address);
                formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
        }
        
        console.log(formData);
    // let files=this.elem.nativeElement.querySelector('#selectedFile').files;
    // let fb=new FormData();
    // let file= files[0];
    // fb.append('selectedFile',file,file.name);
    // console.log(fb);
  //   console.log(this.RegistrationForm.value);
    if (this.RegistrationForm.valid) {
      this.signupservice.submitRegister(formData)
      .subscribe(
        (response)=>{
       
          // this.RegistrationForm.reset();
          
          this.snackbar.open("Registration Success", "Success", {
            duration: 2000,
                  });
        },
       
      (err)=>{
        console.log(err);
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
              this.snackbar.open(err.error,'Alert' ,{
                duration:3000
             });
          }else{
            this.snackbar.open(err.statusText,'Alert' ,{
              duration:3000
           });
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
