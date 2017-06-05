import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule
} from '@angular/material';

import { NavigationModule } from '../navigation/navigation.module';
import { AuthModule } from '../auth/auth.module';
import { FirebaseApiService } from '../firebase/firebase.api.service';

import { DashboardRoutingModule } from './dashboard.module.router';
import {
    LunchOrderService,
    LunchMenuService,
    ApiLunchOrderService,
    ApiLunchMenuService
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
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule
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
    FirebaseApiService,
    LunchOrderService,
    LunchMenuService,
    ApiLunchOrderService,
    ApiLunchMenuService
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
