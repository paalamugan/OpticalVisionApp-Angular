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
import {MatPaginatorModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule }   from '@angular/forms';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AuthGuard } from '../guards/auth.guard';
import {MatTableModule} from '@angular/material/table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../guards/token-interceptor.service';
import {MatDialogModule} from '@angular/material/dialog';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { AuthService } from '../services/auth.service';
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
		 MatNativeDateModule,
		 MatTableModule,
		 MatSnackBarModule,
		 MatPaginatorModule,
		 MatDialogModule
	],
	declarations: [AddEmployeesComponent, ListEmployeesComponent,EditEmployeesComponent],
	providers:[AuthGuard
		// {
        //     provide:HTTP_INTERCEPTORS,
        //     useClass:TokenInterceptorService,
        //     multi:true
        //   }
	],
	entryComponents:[]
})
export class EmployeeModule { }
