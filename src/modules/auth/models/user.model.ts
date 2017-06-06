import { ISignUpForm } from './sign-up-form.interface';

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    isEmailVerified: boolean;

    constructor(signUpForm: ISignUpForm) {
        this.name = signUpForm.name;
        this.email = signUpForm.email;
        this.password = signUpForm.password;
    }
}
