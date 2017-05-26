import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState, AngularFire } from 'angularfire2';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    private authState: FirebaseAuthState = null;

    constructor(public auth$: FirebaseAuth,
                public af: AngularFire,
                private userService: UserService) {
        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
            this.userService.setActiveUser(this.authState.auth);
        });
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login(
            {email, password},
            {
                provider: AuthProviders.Password,
                method  : AuthMethods.Password
            })
            .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    signUp(email: string, password: string): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.createUser({
            email   : email,
            password: password
        });
    }

    signOut(): void {
        this.auth$.logout();
    }
}
