import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CompanySignup } from 'src/app/models/companysignup';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  dob:Date;
  doj:Date;
  companysignup:CompanySignup;
  employee:Employee=new Employee('','','','','','',this.dob,this.doj,'',this.companysignup);
  constructor() { }

  ngOnInit() {
  }
}
