import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { ApiAuthService } from './api-auth.service';
import { ApiUserService } from './api-user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private apiService: ApiAuthService,
                private apiUserService: ApiUserService) {
        this.apiUserService.getActiveUser().subscribe(
            (user: User) => {
                this.setActiveUser(user);
            });
    }

    signIn(email: string, password: string): Observable<User> {
        return this.apiService.signIn(email, password)
            .map((user: User) => {
                this.setActiveUser(user);
                return user;
            });
    }

    signUp(user: User): Observable<User> {
        return this.apiService.signUp(user)
            .map((user: User) => {
                this.setActiveUser(user);
                return user;
            });
    }

    signOut(): void {
        this.apiService.signOut();
    }

    private setActiveUser(user: User): void {
        this.userService.setActiveUser(user);
    }
}
