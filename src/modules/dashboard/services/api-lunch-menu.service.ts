import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../../auth/index';
import { ILunchWeekMenu } from '../models/index';

@Injectable()
export class ApiLunchMenuService {

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

    public getMenu(userTokenId: string, url = `http://185.22.232.203/menu/current`): Observable<ILunchWeekMenu> {
        return this.http.post(url, {tokenId: userTokenId})
            .map(ApiLunchMenuService.extractData)
            .catch(ApiLunchMenuService.handleError);
    }

    public placeMenu(url: string, menu: ILunchWeekMenu): Observable<ILunchWeekMenu> {
        return this.localStorageService.set<ILunchWeekMenu>(url, menu);
    }
}
