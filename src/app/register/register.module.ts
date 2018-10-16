import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router'; 
import { 
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
 } from '@angular/material';
 import { MDBBootstrapModule } from 'angular-bootstrap-md';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
const appRoutes: Routes = [
    { path: '', component: RegisterComponent },
]

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  MatSnackBarModule,
  MatTabsModule,
  MDBBootstrapModule.forRoot(),
    RouterModule.forChild(appRoutes),
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
