import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdSelectModule
} from '@angular/material';

import { NavigationModule } from '../navigation/navigation.module';
import { AuthModule } from '../auth/auth.module';
import { FirebaseApiService } from '../firebase/firebase.api.service';

import { DashboardRoutingModule } from './dashboard.module.router';
import {
    LunchOrderService,
    LunchMenuService,
    ApiLunchOrderService,
    ApiLunchMenuService,
    LunchDaysService
} from './services/index';

import {
    DashboardComponent,
    DaysTableComponent,
    LunchDayComponent,
    LunchMenuComponent,
    LunchDishGroupComponent,
    LunchDishComponent,
    AllUsersOrderComponent,
    CurrentUserOrderComponent,
    DashboardRouterComponent
} from './components/index';

const MATERIAL_MODULES = [
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdSelectModule
];

const COMPONENTS = [
    DashboardComponent,
    DaysTableComponent,
    LunchDayComponent,
    LunchMenuComponent,
    LunchDishGroupComponent,
    LunchDishComponent,
    AllUsersOrderComponent,
    CurrentUserOrderComponent,
    DashboardRouterComponent
];

const SERVICES = [
    FirebaseApiService,
    LunchOrderService,
    LunchMenuService,
    ApiLunchOrderService,
    ApiLunchMenuService,
    LunchDaysService
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports     : [
        AuthModule,
        NavigationModule,
        DashboardRoutingModule,
        CommonModule,
        FormsModule,
        ...MATERIAL_MODULES
    ],
    exports     : [
        DashboardRoutingModule
    ],
    providers   : [
        ...SERVICES
    ]
})

export class DashboardModule {
}
