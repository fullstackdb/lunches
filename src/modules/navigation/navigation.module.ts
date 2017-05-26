import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdIconModule, MdToolbarModule, MdGridListModule } from '@angular/material';

import { AuthModule } from '../auth/auth.module';

import { HeaderComponent } from './components/index';


const MATERIAL_MODULES = [
    MdToolbarModule,
    MdIconModule,
    MdGridListModule
];

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        AuthModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        HeaderComponent
    ]
})
export class NavigationModule {
}

export { HeaderComponent };
