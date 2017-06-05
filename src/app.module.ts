import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AuthModule } from './modules/auth';
import { DashboardModule } from './modules/dashboard';
import { NavigationModule } from './modules/navigation/navigation.module';
import { AppRoutingModule } from 'src/app.router';
import { FirebaseConfigModule } from './modules/firebase/index';

const MATERIAL_MODULES = [
    MdButtonModule
];

@NgModule({
    bootstrap   : [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    imports     : [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        AuthModule,
        FirebaseConfigModule,
        NavigationModule,
        DashboardModule,
        ...MATERIAL_MODULES
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        }
    ]
})

export class AppModule {
}
