import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent, SignUpComponent } from './components/index';


const authRoutes: Routes = [
    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: 'register',
        component: SignUpComponent
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
