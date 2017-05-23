import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule
} from '@angular/material';

import { SignInComponent, SignUpComponent } from './components/index';
import { AuthGuard } from './guards/auth-guard';
import { UnauthGuard } from './guards/unauth-guard';
import { AuthService } from './services/auth-service';
import { AuthRoutingModule } from './auth.module.router';

const MATERIAL_MODULES = [
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule
];

const COMPONENTS = [
    SignInComponent,
    SignUpComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports     : [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MATERIAL_MODULES
    ],
    exports     : [
        AuthRoutingModule,
        ...COMPONENTS
    ],
    providers   : [
        AuthGuard,
        AuthService,
        UnauthGuard
    ]
})
export class AuthModule {
}

export { AuthGuard };
export { AuthService };
export { UnauthGuard };
