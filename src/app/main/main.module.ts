import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { appRoutes } from './mainloader.routes';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';

import { TopMenuModule } from '../top-menu/top-menu.module';
import { AuthGuard } from '../guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../guards/token-interceptor.service';
import { AuthService } from '../services/auth.service';
import { ForgetpasswordComponent } from '../forget/forgetpassword/forgetpassword.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        DashboardCrmModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        TopMenuModule,
        MatSidenavModule,
        PerfectScrollbarModule,
    ],
    declarations: [MainComponent],
    providers: [AuthService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        // {
        //     provide:HTTP_INTERCEPTORS,
        //     useClass:TokenInterceptorService,
        //     multi:true
        //   }
       
    ]
})
export class MainModule { }