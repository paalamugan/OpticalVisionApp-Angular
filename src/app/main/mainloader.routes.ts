import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { AuthGuard } from '../guards/auth.guard';

export const appRoutes: Routes = [{
    path: '', component: MainComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent,canActivate:[AuthGuard] },
        { path: 'employees', loadChildren: '../employees/employees.module#EmployeeModule' },
        { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
      //  { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
      //  { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
      //  { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
      //  { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
      //  { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
       // { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];