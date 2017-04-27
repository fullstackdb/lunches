import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';


@Component({
  styles: [
    require('./sign-in.component.scss')
  ],
  template: require('./sign-in.component.html')
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signIn(): void {
    // this.auth.signInAnonymously()
    //   .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/tasks']);
  }

  private isEmailValid(formText): boolean {
    if(formText.length) {
      return  formText.length > 10 ? formText.includes('@lvivit.com') : false;
    }
    return true;
  }

  private isPasswordValid(formText): boolean {
    if(formText.length) {
      return Boolean(formText.length >= 4);
    }
    return true;    
  }
}
