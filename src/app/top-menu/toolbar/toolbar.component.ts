import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helper';
import { LoginService } from 'src/app/services/login.service';
import { CompanySignup } from 'src/app/models/companysignup';
import { Data } from 'src/app/models/data';
import { Admin } from 'src/app/models/admin';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
  @Input() matDrawerShow;
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  constructor(private loginservice:LoginService) { }

  ngOnInit() {
   
  }
  

}
