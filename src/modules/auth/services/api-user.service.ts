import { Observable } from 'rxjs/Observable';
import { IApiUserService } from '../models/services/api-user-service.interface';
import { User } from '../models/index';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUserService implements IApiUserService {
    constructor(private localStorageService: LocalStorageService) {
    }

    getActiveUser(): Observable<User> {
        return this.localStorageService.get<User>('user');
    }

    setActiveUser(activeUser: User): void {
        this.localStorageService.set<User>('user', activeUser);
    }
}
