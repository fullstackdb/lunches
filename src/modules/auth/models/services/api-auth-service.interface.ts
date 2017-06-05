import { Observable } from 'rxjs/Observable';
import { User } from '../user.model';

export interface IApiAuthService {
    signIn(email: string, password: string): Observable<User>;
    signUp(user: User): Observable<User>;
    signOut(): void;
}
