import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/index';
import { EMAIL_LENGTH, PASS_LENGTH } from '../../constants/sso.constants';

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
        if (this.isFormValid()) {
            this.auth.signIn(email, password)
                .subscribe((user: User) => {
                    console.log('signIn', user);
                    this.postSignIn();
                });
        }
    }

    private postSignIn(): void {
        this.router.navigate(['/dashboard']);
    }

    private validateEmail(email: string): void {
        if (email.length) {
            this.isEmailValid = email.length > EMAIL_LENGTH ? email.includes('@') : false;
        }
    }

    private validatePassword(password: string): void {
        if (password.length) {
            this.isPasswordValid = Boolean(password.length >= PASS_LENGTH);
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
