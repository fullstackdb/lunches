import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { UserInfo } from 'firebase';

@Injectable()
export class UserService {
    private _user: UserInfo | null = null;
    private activeUserSource = new ReplaySubject<UserInfo>(1);

    public ActiveUser$ = this.activeUserSource.asObservable();

    set user(user: UserInfo) {
        this._user = user;
    }

    get user(): UserInfo {
        return this._user;
    }

    public setActiveUser(activeUser: UserInfo): void {
        this.user = activeUser;
        this.tellAboutUser();
    }

    private tellAboutUser(): void {
        this.activeUserSource.next(this.user);
    }

}
