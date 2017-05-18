import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';


export const ROUTES: Routes = [
    {
        path       : '',
        component  : HomePageComponent,
        pathMatch : 'full'
    },
    {
        path: 'login',
        loadChildren: '../auth/auth.module#DashboardModule'
    },
    {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
    }
];
