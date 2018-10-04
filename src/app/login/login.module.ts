import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router'; 
import { 
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
 } from '@angular/material';
 import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
