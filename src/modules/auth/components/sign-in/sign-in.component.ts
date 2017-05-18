import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
    styles  : [require('./sign-in.component.scss')],
    template: require('./sign-in.component.html')
})

export class SignInComponent {
    private isEmailValid: boolean = false;
    private isPasswordValid: boolean = false;

    constructor(private auth: AuthService, private router: Router) {
    }

    signIn(email: string, password: string): void {
        console.log('signIn', this.isFormValid(), this.isEmailValid, this.isPasswordValid);
        if (this.isFormValid()) {
            console.log('signIn');
            this.auth.signIn(email, password)
                .then(() => this.postSignIn());
        }
    }

    private postSignIn(): void {
        console.log('loggined');
    }

    private validateEmail(email: string): void {
        if (email.length) {
            this.isEmailValid = Boolean(email.length >= 5);  // ? email.includes('@lvivit.com') : false;
        }
    }

    private validatePassword(password: string): void {
        if (password.length) {
            this.isPasswordValid = Boolean(password.length >= 8);
        }
    }

    private isFormValid(): boolean {
        return this.isEmailValid && this.isPasswordValid;
    }

    private showEmailWarningMessage(email: string): boolean {
        return email.length && !this.isEmailValid;
    }

    private showPasswordWarningMessage(password: string): boolean {
        return password.length && !this.isPasswordValid;
    }

}
