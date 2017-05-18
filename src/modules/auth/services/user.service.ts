import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private _user: User = null;

    set user(user: User) {
        this._user = user;
    }

    get user(): User {
        return this._user;
    }

    constructor() {
    }

}
