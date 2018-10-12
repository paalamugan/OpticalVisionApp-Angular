import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import{ passValidator,account_validation_messages } from '../custom-validators/custom-validator';
import { SignupService } from '../services/signup.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
  hide = true;
  account_validation_messages=account_validation_messages;
  successMessage:string="";
  //Registeration: FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private signupservice:SignupService) {

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
  tinNumber: ['',[Validators.required]],
  userName: ['',Validators.compose([
		Validators.maxLength(25),
		Validators.minLength(5),
		Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
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
    Validators.pattern('^[0-9]*$') //this is for the letters (both uppercase and lowercase) and numbers validation
 ])],
})
  ngOnInit() {
  }
  
  
  signUp(){
    console.log(this.RegistrationForm.value);
    if (this.RegistrationForm.valid) {
      this.signupservice.submitRegister(this.RegistrationForm.value)
      .subscribe((response)=>{
        console.log(response);
        this.successMessage
      });
   }
    
     
    }
  
//this.router.navigate(['/login']);
  
  
}
