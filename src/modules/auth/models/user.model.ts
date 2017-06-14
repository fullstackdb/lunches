import { ISignUpForm } from './sign-up-form.interface';

export class User {
    id: string;
    tokenId: string;
    name: string;
    email: string;
    pass: string;
    role: string;
    isEmailVerified: boolean;

    constructor(signUpForm: ISignUpForm) {
        this.name = signUpForm.name;
        this.email = signUpForm.email;
        this.pass = signUpForm.password;
    }
}
