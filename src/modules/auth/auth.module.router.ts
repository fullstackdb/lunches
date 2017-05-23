import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnauthGuard } from './guards/unauth-guard';
import { SignInComponent, SignUpComponent } from './components/index';


const authRoutes: Routes = [
    {
        path: 'login',
        component: SignInComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: 'register',
        component: SignUpComponent,
        canActivate: [UnauthGuard]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
