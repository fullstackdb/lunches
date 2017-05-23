import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.module.router';
import { LunchDashboardService } from './services/index';

import {
    LunchTableComponent,
    DaysTableComponent,
    LunchDayComponent
} from './components/index';


const COMPONENTS = [
    LunchTableComponent,
    DaysTableComponent,
    LunchDayComponent
];

const SERVICES = [
    LunchDashboardService
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports     : [
        DashboardRoutingModule,
        CommonModule,
        FormsModule
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
