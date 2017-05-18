import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'signup',
  styles: [
    require('./sign-up.component.scss')
  ],
  template: require('./sign-up.component.html')
  
  // `
  //  <div class="form-container">
  // <a routerLink="/login" id="goback">Go back</a>

  // <h2>Join now</h2>

  // <span class="error" *ngIf="error">{{ error }}</span>
    
  // <form #formData='ngForm' (ngSubmit)="onSubmit(formData)">

  //   <input type="text" placeholder="Email address.." (ngModel)="email" name="email" class="txt" required>
  //   <input type="password" placeholder="Password" (ngModel)="password" name="password" class="txt" required>

  //   <button type="submit" [disabled]="!formData.valid" class="basic-btn">Create my account</button>
  // </form>
  // </div>
  // `
})
export class SignUpComponent {

  state: string = '';
  error: any;

  constructor(private auth: AuthService, private router: Router) {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      let [email, password] = [formData.value.email, formData.value.password];
      this.auth.signUp(email, password).then((success) => {
        this.router.navigate(['/tasks'])
      }).catch((err) => {
        this.error = err;
      })
    }
  }

  private isNameValid(formText): boolean {
    if(formText.length) {
      return Boolean(formText.length >= 3);
    }
    return true;    
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
