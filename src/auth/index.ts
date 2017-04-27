import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: SignInComponent, canActivate: [UnauthGuard]},
  {path: 'register', component: SignUpComponent, canActivate: [UnauthGuard]}  
];

const MATERIAL_MODULES = [
    MdCheckboxModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})
export class AuthModule {}

export { AuthGuard };
export { AuthService };
export { UnauthGuard };
