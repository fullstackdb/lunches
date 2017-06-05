import { Observable } from 'rxjs/Observable';
import { User } from '../user.model';

export interface IApiUserService {
    getActiveUser(): Observable<User>;
}
