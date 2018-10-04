import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MainLoadModule} from './main-load/main-load.module';
import {TopMenuModule} from './top-menu/top-menu.module'
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MainLoadModule,
    TopMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
