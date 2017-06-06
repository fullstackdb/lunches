import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../../auth/index';
import { OrderLunchModel } from '../models/index';

@Injectable()
export class ApiLunchOrderService {

    constructor(private localStorageService: LocalStorageService) {
    }

    getOrderList(url: string): Observable<OrderLunchModel[]> {
        return this.localStorageService.get<OrderLunchModel[]>(url);
    }

    getOrderByDate(url: string, date: Date): Observable<OrderLunchModel[]> {
        return this.localStorageService.get<OrderLunchModel[]>(url);
    }

    getOrderByDay(url: string, day: string): Observable<OrderLunchModel> {
        return this.localStorageService.get<OrderLunchModel>(url);
    }

    createOrder(url: string, order: OrderLunchModel): Observable<OrderLunchModel> {
        return this.localStorageService.set<OrderLunchModel>(url, order);
    }

    removeOrder(url: string, orderId: any): Observable<any> {
        this.localStorageService.delete(url);
        return Observable.of({status: 'ok'});
    }

    updateOrder(url: string, orderId: string, order: any): Observable<any> {
        return this.localStorageService.set<OrderLunchModel[]>(url, order);
    }
}
