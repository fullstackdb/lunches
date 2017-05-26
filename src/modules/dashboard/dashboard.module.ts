import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule
} from '@angular/material';

import { NavigationModule } from '../navigation/navigation.module';
import { AuthModule } from '../auth/auth.module';

import { DashboardRoutingModule } from './dashboard.module.router';
import {
    LunchDashboardService,
    LunchMenuService
} from './services/index';

import {
    LunchTableComponent,
    DaysTableComponent,
    LunchDayComponent,
    LunchMenuComponent,
    LunchDishGroupComponent,
    LunchDishComponent
} from './components/index';

const MATERIAL_MODULES = [
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule
];

const COMPONENTS = [
    LunchTableComponent,
    DaysTableComponent,
    LunchDayComponent,
    LunchMenuComponent,
    LunchDishGroupComponent,
    LunchDishComponent
];

const SERVICES = [
    LunchDashboardService,
    LunchMenuService
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
