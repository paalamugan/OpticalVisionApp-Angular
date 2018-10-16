import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';


const employeeroutes: Routes = [
  	{ path: 'addemployees', component: AddEmployeesComponent },
  	{ path: 'listemployees', component: ListEmployeesComponent },
  	
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeroutes)
  	],
  exports: [
    RouterModule
  ]
})
export class EmployeesRouterModule {}