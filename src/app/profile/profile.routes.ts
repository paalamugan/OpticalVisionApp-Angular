import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';


const profileroutes: Routes = [
  	{ path: 'adminprofile', component: AdminProfileComponent, canActivate:[AuthGuard]},
      { path: 'employeeprofile', component: EmployeeProfileComponent,canLoad:[AuthGuard] },
  	
];

@NgModule({
  imports: [
    RouterModule.forChild(profileroutes)
  	],
  exports: [
    RouterModule
  ]
})
export class ProfileRouterModule {}