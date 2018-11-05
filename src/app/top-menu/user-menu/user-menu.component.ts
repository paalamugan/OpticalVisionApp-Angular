import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CompanySignup } from 'src/app/models/companysignup';
import { Admin } from 'src/app/models/admin';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen: boolean = false;
   currentUser:Admin;
   userimage:any;
   name:string='No name';
   profileURL:string;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
       return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.isOpen = false;
    }
  }
  
  
  constructor(private elementRef: ElementRef,private router:Router,private loginservice:LoginService) { }


  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      this.currentUser=data;
    if(this.currentUser.Identifier=="admin"){
        if(this.currentUser.userImage==="null"){
          this.userimage=false;
                }else{
                  this.userimage=Utils.APIURL+this.currentUser.userImage;
                }
        this.profileURL='/optical/profile/adminprofile/';
      }else{
        this.profileURL='/optical/profile/employeeprofile/';
       }
 
    });
  }
  nagivateurl(){
   this.router.navigate([this.profileURL]);
    this.isOpen=false;
  }
  logout(){
   localStorage.removeItem('token');
this.router.navigate(['/login']);
  }
}
