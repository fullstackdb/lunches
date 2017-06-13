import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/index';
import { ISignUpForm, User } from '../../models/index';
import { EMAIL_LENGTH, NAME_LENGTH, PASS_LENGTH } from '../../constants/sso.constants';

@Component({
    selector: 'signup',
    styles  : [
        require('./sign-up.component.scss')
    ],
    template: require('./sign-up.component.html')
})
export class SignUpComponent {
    showFormNotValidMessage: boolean = false;

    constructor(private auth: AuthService,
                private router: Router) {
    }

    public onSubmit(formData: any): void {
        if (formData.valid && this.isFormValid(formData.value)) {
            this.showFormNotValidMessage = false;
            this.auth.signUp(new User(formData.value)).subscribe(
                (user: User) => {
                    this.router.navigate(['/dashboard']);
                },
                (err: any) => {
                    console.log(err);
                });
        } else {
            this.showFormNotValidMessage = true;
        }
    }

    private isFormValid(signUpForm: ISignUpForm): boolean {
        return this.isNameValid(signUpForm.name) && this.isEmailValid(signUpForm.email) &&
            this.isPasswordValid(signUpForm.password) && this.isSamePassword(signUpForm.password, signUpForm.repeatPassword);
    }

    private isNameValid(formText: string): boolean {
        if (formText === null || undefined) {
            return false;
        }

        if (formText.length) {
            return Boolean(formText.length >= NAME_LENGTH);
        }
        return true;
    }

    private isEmailValid(formText: string): boolean {
        if (formText === null || undefined) {
            return false;
        }

        if (formText.length) {
            return formText.length > EMAIL_LENGTH ? formText.includes('@') : false;
        }
        return true;
    }

    private isPasswordValid(formText: string): boolean {
        if (formText === null || undefined) {
            return false;
        }

        if (formText.length) {
            return Boolean(formText.length >= PASS_LENGTH);
        }
        return true;
    }

    private isSamePassword(pass: string, repeatPass: string): boolean {
        if (pass === null || undefined) {
            return false;
        }

        if (pass.length && repeatPass.length) {
            return pass === repeatPass;
        }
        return true;
    }
}
