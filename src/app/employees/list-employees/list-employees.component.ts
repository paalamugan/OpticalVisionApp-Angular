import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Utils } from 'src/app/utils';
import{Router} from '@angular/router';
import { EditEmployeesComponent } from '../edit-employees/edit-employees.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Data } from 'src/app/models/data';
import { LoginService } from 'src/app/services/login.service';
import { Admin } from 'src/app/models/admin';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'image','employeeid', 'employeeName', 'employeeEmail','address','mobileNumber','DOB','DOJ','adminAccess','edit'];
  public employees: Array<Employee> = [];
  editHidden:boolean=false;
  public dataSource = new MatTableDataSource<Employee>(this.employees);
  Apiurl:string="";
  constructor(private employeeservice:EmployeeService,private loginservice:LoginService,private router:Router,private dialog?: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.loginservice.getUserName().subscribe((data:Admin)=>{
      if(data.Identifier==="employee"){
        this.editHidden=true;
      }
        this.employeeservice.getAllemployee().subscribe((resultData:Array<Employee>)=>{
          this.employees=resultData;
          this.Apiurl=Utils.APIURL;
            this.dataSource = new MatTableDataSource<Employee>(this.employees);
            this.dataSource.paginator = this.paginator;
          },
          (err)=>{
            if(err instanceof HttpErrorResponse){
              if(err.status===401){
                this.router.navigateByUrl('login');
               }
            }
          }
          );
    });
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  employeeEdit(employee:Employee){
    this.router.navigate(['optical/employees/editemployees',employee.uuid]);
    // this.isPopupOpened = true;
 
    // const dialogRef = this.dialog.open(EditEmployeesComponent, {
    
    //   data: employee

    // });
 

    // dialogRef.afterClosed().subscribe(product => {
    //   this.isPopupOpened = false;
    // });
  }
}
