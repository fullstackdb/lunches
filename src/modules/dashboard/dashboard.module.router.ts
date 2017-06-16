import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';

import {
    LunchTableComponent,
    LunchMenuComponent,
    MainDashboardComponent,
    AllUsersOrderComponent
} from './components/index';

const dashboardRoutes: Routes = [
    {
        path       : 'dashboard',
        component  : LunchTableComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path     : '',
                component: MainDashboardComponent
            },
            {
                path     : ':day',
                component: LunchMenuComponent
            }
        ]
    },
    {
        path       : 'all-users-order',
        component  : MainDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path     : ':day',
                component: AllUsersOrderComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {
}
