import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../../auth/index';
import { ILunchMenu } from '../models/index';

@Injectable()
export class ApiLunchMenuService {

    constructor(private localStorageService: LocalStorageService) {
    }

    public getMenu(url: string): Observable<ILunchMenu> {
        return this.localStorageService.get<ILunchMenu>(url);
    }

    public placeMenu(url: string, menu: ILunchMenu): Observable<ILunchMenu> {
        return this.localStorageService.set<ILunchMenu>(url, menu);
    }
}
