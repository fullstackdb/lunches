import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/index';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class NavigationModule {
}

export { HeaderComponent };
