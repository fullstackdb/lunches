import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.router';
import { AppComponent } from './components/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AuthModule } from '../modules/auth';
import { FirebaseModule } from '../modules/firebase';
import { DashboardModule } from '../modules/dashboard';
import { NavigationModule } from '../modules/navigation/index';



@NgModule({
    bootstrap   : [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES, {useHash: false}),
        AuthModule,
        FirebaseModule,
        NavigationModule,
        DashboardModule
    ]
})

export class AppModule {
}
