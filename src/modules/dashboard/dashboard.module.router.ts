import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';

import {
    DashboardComponent,
    LunchMenuComponent,
    DashboardRouterComponent,
    AllUsersOrderComponent
} from './components/index';

const dashboardRoutes: Routes = [
    {
        path       : 'dashboard',
        component  : DashboardComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path     : '',
                component: DashboardRouterComponent
            },
            {
                path     : ':day',
                component: LunchMenuComponent
            }
        ]
    },
    {
        path       : 'all-users-order',
        component  : DashboardRouterComponent,
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
