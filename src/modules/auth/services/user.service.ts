import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { User } from '../models/index';
import { ApiUserService } from './api-user.service';

@Injectable()
export class UserService {
    private _user: User | null = null;
    private activeUserSource = new ReplaySubject<User>(1);

    public ActiveUser$ = this.activeUserSource.asObservable();

    set user(user: User) {
        this._user = user;
    }

    get user(): User {
        return this._user;
    }

    constructor(private apiUserService: ApiUserService) {
        this.apiUserService.getActiveUser().subscribe(
            (user: User | null) => {
                if (user !== null) {
                    this.setActiveUser(user);
                }
            });
    }

    public setActiveUser(activeUser: User): void {
        this.apiUserService.setActiveUser(activeUser);
        this.user = activeUser;
        this.tellAboutUser();
    }

    private tellAboutUser(): void {
        this.activeUserSource.next(this.user);
    }

}
