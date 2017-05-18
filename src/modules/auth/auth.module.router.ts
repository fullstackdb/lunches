import { Routes } from '@angular/router';
import { UnauthGuard } from './guards/unauth-guard';

import { SignInComponent, SignUpComponent } from './components/index';

export const ROUTES: Routes = [
    {
        path      : '',
        redirectTo: 'login',
        pathMatch : 'full'
    },
    {
        path       : 'login',
        component  : SignInComponent,
        canActivate: [UnauthGuard]
    },
    {
        path       : 'register',
        component  : SignUpComponent,
        canActivate: [UnauthGuard]
    }
];
