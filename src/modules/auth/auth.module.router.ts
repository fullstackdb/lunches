import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnAuthGuard } from './guards/unauth-guard';
import { SignInComponent, SignUpComponent } from './components/index';


const authRoutes: Routes = [
    {
        path: 'login',
        component: SignInComponent,
        canActivate: [UnAuthGuard]
    },
    {
        path: 'register',
        component: SignUpComponent,
        canActivate: [UnAuthGuard]
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
