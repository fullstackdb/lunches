import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApiAuthService } from '../models/services/api-auth-service.interface';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ApiAuthService implements IApiAuthService {

    constructor(private localStorageService: LocalStorageService) {
    }

    signIn(email: string, password: string): Observable<User> {
        return this.localStorageService.set<User>('user', {name: email, email: email, id: password} as User);
    }

    signUp(user: User): Observable<User> {
        return this.localStorageService.set<User>('user', user);
    }

    signOut(): void {
        this.localStorageService.delete('user');
    }

}
