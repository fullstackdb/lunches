import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApiAuthService } from '../models/services/api-auth-service.interface';
import { User } from '../models/user.model';

@Injectable()
export class ApiAuthService implements IApiAuthService {
    signIn(email: string, password: string): Observable<User> {
        return Observable.of({name: email, email: email, id: password} as User);
    }

    signUp(user: User): Observable<User> {
        return Observable.of(user);
    }

    signOut(): void {
        console.log(`signOut`);
    }
}
