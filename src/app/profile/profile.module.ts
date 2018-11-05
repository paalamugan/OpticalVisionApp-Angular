import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouterModule } from './profile.routes';
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
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AuthGuard } from '../guards/auth.guard';
@NgModule({
	imports: [
		CommonModule,
		ProfileRouterModule,
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
	declarations: [AdminProfileComponent, EmployeeProfileComponent],
	providers:[AuthGuard],
	entryComponents:[]
})
export class ProfileModule { }
