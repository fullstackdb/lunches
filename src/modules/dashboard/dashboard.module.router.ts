import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';

import {
    LunchTableComponent,
    LunchMenuComponent
} from './components/index';

const dashboardRoutes: Routes = [
    {
        path       : 'dashboard',
        component  : LunchTableComponent,
        canActivate: [AuthGuard],
        children   : [
            {
                path       : ':day',
                component  : LunchMenuComponent
            }
        ]
    }
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
