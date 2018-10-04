import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  emailname:string;
adminhide:boolean=true;
  constructor(private router: Router) {
  }

  ngOnInit() {
   
  }

  admin(){
    this.adminhide=true;
  }
  employee(){
this.adminhide=false;
  }
  loginUser() {
    this.router.navigate(['/optical/dashboard']);
  }
  signup(){
    this.router.navigate(['/register']);
  }
}
