import { Component, OnInit,Input } from '@angular/core';
// import { Admin_menus,Employee_menus } from './menu-element';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
import { adminmenus,Employee_menus } from './menu-element';

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
  constructor(private loginservice:LoginService) {
   }

  ngOnInit() {
    this.loginservice.getUserName().subscribe(
      (data:Admin)=>{
        console.log(this.admin);
      if(data.Identifier === this.admin){
        this.menus=adminmenus;
      }else{
        this.employeemenus = Employee_menus;
      }
    },
    err=>{
console.log(err);
    }
    );
    
  }

}
