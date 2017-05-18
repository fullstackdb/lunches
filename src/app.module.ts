import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AuthModule } from './modules/auth';
import { FirebaseModule } from './modules/firebase';
import { DashboardModule } from './modules/dashboard';
import { NavigationModule } from './modules/navigation/navigation.module';
import { AppRoutingModule } from 'src/app.router';

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
        AuthModule,
        FirebaseModule,
        NavigationModule,
        //DashboardModule
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        },

    ],
})

export class AppModule {
}
