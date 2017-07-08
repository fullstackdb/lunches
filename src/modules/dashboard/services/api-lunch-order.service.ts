import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../../auth/index';
import {
    IOrderDailyLunch,
    IOrderDishGroupResponse,
    OrderLunchDayModel,
    IOrderAllUsersLunches
} from '../models/index';

@Injectable()
export class ApiLunchOrderService {

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
                private http: Http) {
    }

    getOrderList(userTokenId: string): Observable<IOrderDailyLunch[]> {
        return this.http.post(`http://185.22.232.203/order/day/user`, {tokenId: userTokenId})
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
        //return this.localStorageService.get<IOrderDailyLunch[]>(url);
    }

    getOrderByDate(userTokenId: string, orderDate: string): Observable<IOrderDailyLunch> {
        return this.http.post(`http://185.22.232.203/order/day/user`, {tokenId: userTokenId, date: orderDate})
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
    }

    getAllUsersOrderCurrentDate(): Observable<IOrderAllUsersLunches> {
        return this.http.get(`http://185.22.232.203/order/all/today`)
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
    }

    getAllUsersOrderNextDate(): Observable<IOrderAllUsersLunches> {
        return this.http.get(`http://185.22.232.203/order/all/next`)
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
    }

    placeOrder(order: OrderLunchDayModel): Observable<IOrderDishGroupResponse> {
        return this.http.post(`http://185.22.232.203/order/day/save`, order)
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
    }

    removeOrder(order: OrderLunchDayModel): Observable<IOrderDishGroupResponse> {
        return this.http.post(`http://185.22.232.203/order/day/remove`, order)
            .map(ApiLunchOrderService.extractData)
            .catch(ApiLunchOrderService.handleError);
    }

    updateOrder(url: string, orderId: string, order: any): Observable<any> {
        return this.localStorageService.set<IOrderDailyLunch[]>(url, order);
    }
}
