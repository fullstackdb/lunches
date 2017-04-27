import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MdGridListModule,
    MdInputModule
} from '@angular/material';

import { AuthModule } from '../auth';
import { FirebaseModule } from '../firebase';
import { TasksModule } from '../tasks';

import { AppComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';


const MATERIALS_MODULES = [
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MdGridListModule,
    MdInputModule
]

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    ...MATERIALS_MODULES,    
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {useHash: false}),
    AuthModule,
    FirebaseModule,
    TasksModule,
  ]
})

export class AppModule {}
