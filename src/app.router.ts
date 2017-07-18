import { NgModule }     from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
//import { UnAuthGuard } from './modules/auth/guards/unauth-guard';

const appRoutes: Routes = [
    {
        path      : '',
        redirectTo: '/login',
        pathMatch : 'full'
    },
    {
        path     : 'home',
        component: HomePageComponent
    },
    {
        path        : 'user',
        loadChildren: './modules/auth/auth.module#AuthModule',
        //canActivate: [UnAuthGuard]
    },
    //{
    //    path        : 'dashboard',
    //    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
    //}
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    //providers: [
    //    UnAuthGuard
    //]
})
export class AppRoutingModule {
}
