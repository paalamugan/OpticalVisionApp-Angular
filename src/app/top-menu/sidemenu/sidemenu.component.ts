import { Component, OnInit,Input } from '@angular/core';
// import { Admin_menus,Employee_menus } from './menu-element';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { adminmenus,Employee_menus } from './menu-element';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() iconOnly:boolean = false;
  public menus;
  public employeemenus;
  admin:string='admin';
  employeeadmin:string="employee-admin";
  constructor(private loginservice:LoginService,private router:Router) {
   }

  ngOnInit() {
    this.loginservice.getUserName().subscribe(
      (data:Admin)=>{
      if(data.Identifier === this.admin || data.Identifier === this.employeeadmin ){
        this.menus=adminmenus;
      }else{
        this.employeemenus = Employee_menus;
      }
    },
    err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigateByUrl('login');
         }
      }
    }
    );
    
  }

}
