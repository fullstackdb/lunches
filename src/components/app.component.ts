import { Component } from '@angular/core';
import { AuthService } from '../../modules/auth';


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
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}
