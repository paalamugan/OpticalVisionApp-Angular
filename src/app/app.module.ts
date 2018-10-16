import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MainLoadModule} from './main-load/main-load.module';
import {TopMenuModule} from './top-menu/top-menu.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './guards/token-interceptor.service';
import { Data } from './models/data';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MainLoadModule,
    TopMenuModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthGuard,Data,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
