import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    styles  : [require('./home-page.component.scss')],
    template: require('./home-page.component.html')
})
export class HomePageComponent {
    private title: string = 'Home';
}
