import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MainLoadModule} from './main-load/main-load.module';
import {TopMenuModule} from './top-menu/top-menu.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './guards/token-interceptor.service';
import { Data } from './models/data';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthService } from './services/auth.service';
import { ForgetpasswordComponent } from './forget/forgetpassword/forgetpassword.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { 
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,MatSnackBarModule
 } from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MainLoadModule,
    TopMenuModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthGuard,Data,AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
