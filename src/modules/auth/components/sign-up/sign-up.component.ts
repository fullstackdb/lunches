import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
    selector: 'signup',
    styles  : [
        require('./sign-up.component.scss')
    ],
    template: require('./sign-up.component.html')
})
export class SignUpComponent {
    state: string = '';
    error: any;

    constructor(private auth: AuthService, private router: Router) {
    }

    onSubmit(formData: any): void {
        if (formData.valid) {
            console.log(formData.value);
            let [email, password] = [formData.value.email, formData.value.password];
            this.auth.signUp(email, password).then((success) => {
                this.router.navigate(['/tasks'])
            }).catch((err) => {
                this.error = err;
            });
        }
    }

    private isNameValid(formText: string): boolean {
        if (formText.length) {
            return Boolean(formText.length >= 3);
        }
        return true;
    }

    private isEmailValid(formText: string): boolean {
        if (formText.length) {
            return formText.length > 10 ? formText.includes('@lvivit.com') : false;
        }
        return true;
    }

    private isPasswordValid(formText: string): boolean {
        if (formText.length) {
            return Boolean(formText.length >= 4);
        }
        return true;
    }
}
