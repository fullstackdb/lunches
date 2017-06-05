import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { User } from '../models/index';

@Injectable()
export class UserService {
    private _user: User | null = null;
    private activeUserSource = new ReplaySubject<User>(1);

    private tellAboutUser(): void {
        this.activeUserSource.next(this.user);
    }

    public ActiveUser$ = this.activeUserSource.asObservable();

    set user(user: User) {
        this._user = user;
    }

    get user(): User {
        return this._user;
    }

    public setActiveUser(activeUser: User): void {
        this.user = activeUser;
        this.tellAboutUser();
    }

}
