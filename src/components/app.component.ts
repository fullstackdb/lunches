import { Component } from '@angular/core';


@Component({
  selector: 'app',
  styles: [
    require('./app.component.scss')
  ],
  template: `      
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {
  constructor() {}
}
