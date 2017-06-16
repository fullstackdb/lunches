import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IApiAuthService } from '../models/services/api-auth-service.interface';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ApiAuthService implements IApiAuthService {

    private static extractData(res: Response): any {
        return res.json();
    }

    private static  handleError(error: Response | any): any {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

    constructor(private localStorageService: LocalStorageService,
                protected http: Http) {
    }

    signIn(email: string, password: string): Observable<User> {
        return this.http.post(`http://192.168.1.60:8080/user/login`, {email: email, pass: password})
            .map(ApiAuthService.extractData)
            .catch(ApiAuthService.handleError);
    }

    signUp(user: User): Observable<User> {
        return this.http.post(`http://192.168.1.60:8080/user/register`, user)
            .map(ApiAuthService.extractData)
            .catch(ApiAuthService.handleError);
    }

    signOut(userTokenId: string): Observable<any> {
        this.localStorageService.delete('user');
        return this.http.post(`http://192.168.1.60:8080/user/logOut`, {tokenId: userTokenId})
            .map(ApiAuthService.extractData)
            .catch(ApiAuthService.handleError);
    }

}
