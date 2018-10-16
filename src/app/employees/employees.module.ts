import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRouterModule } from './employees.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,
			MatNativeDateModule,
			MatDatepickerModule
		} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule }   from '@angular/forms';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
@NgModule({
	imports: [
		CommonModule,
		EmployeesRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
		 ReactiveFormsModule,
		 FormsModule,
		 MatRadioModule,
		 MatDatepickerModule,
		 MatNativeDateModule
	],
	declarations: [AddEmployeesComponent, ListEmployeesComponent]
})
export class EmployeeModule { }
