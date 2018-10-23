import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AuthGuard } from '../guards/auth.guard';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';


const employeeroutes: Routes = [
  	{ path: 'addemployees', component: AddEmployeesComponent,canActivate:[AuthGuard] },
    { path: 'listemployees', component: ListEmployeesComponent,canActivate:[AuthGuard] },
    { path: 'editemployees/:id', component: EditEmployeesComponent,canActivate:[AuthGuard] },
  	
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