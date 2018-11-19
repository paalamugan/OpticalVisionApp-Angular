import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { LoginService } from '../services/login.service';
import { CompanySignup } from '../models/companysignup';
import { Data } from '../models/data';
import { Admin } from '../models/admin';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Utils } from '../utils';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isVisible : boolean = true;
  visibility = 'shown';
  
userCompanyname:string='';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }


	constructor(private media: ObservableMedia,private loginservice:LoginService,private router:Router,private data1:Data) { }

	ngOnInit() {
        this.loginservice.getUserName().subscribe((data:Admin)=>{
            this.userCompanyname=data.companyname;
          },
          (err)=>{
            if(err instanceof HttpErrorResponse){
              if(err.status===401){
                this.router.navigateByUrl('login');
               }
            }
          }
          );
          
		this.media.subscribe((mediaChange: MediaChange) => {
            this.toggleView();
        });
        
	}
    getRouteAnimation(outlet) {

     return outlet.activatedRouteData.animation;
       //return outlet.isActivated ? outlet.activatedRoute : ''
    }

	toggleView() {
      
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}



}
