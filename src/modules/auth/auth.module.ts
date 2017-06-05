import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule
} from '@angular/material';

import {
    SignInComponent,
    SignUpComponent,
    UserWidgetComponent
} from './components/index';
import { AuthGuard } from './guards/auth-guard';
import { UnAuthGuard } from './guards/unauth-guard';
import { AuthService } from './services/auth-service';
import { AuthRoutingModule } from './auth.module.router';
import { UserService } from './services/user.service';

const MATERIAL_MODULES = [
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule
];

const COMPONENTS = [
    SignInComponent,
    SignUpComponent,
    UserWidgetComponent
];

const SERVICES = [
    AuthGuard,
    AuthService,
    UnAuthGuard,
    UserService
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
        ...SERVICES
    ]
})
export class AuthModule {
}

export { AuthGuard };
export { AuthService };
export { UnAuthGuard };
