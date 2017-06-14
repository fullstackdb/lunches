import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { UserService } from '../../auth/index';

import { ILunchOrderService, OrderLunchModel, OrderDishGroupModel } from '../models/index';
import { ApiLunchOrderService } from './api-lunch-order.service';

@Injectable()
export class LunchOrderService implements ILunchOrderService {
    private userID: string;
    private url: string;
    private currentOrderSource = new ReplaySubject<OrderLunchModel>(1);

    public CurrentOrder$ = this.currentOrderSource.asObservable();

    constructor(private apiService: ApiLunchOrderService, userService: UserService) {
        this.userID = userService.user.id;
        this.url = `/orders/${this.userID}`;
    }

    getOrderList(): Observable<OrderLunchModel[]> {
        return this.apiService.getOrderList(this.url);
    }

    getOrderByDate(date: Date): Observable<OrderLunchModel[]> {
        return this.apiService.getOrderByDate(this.url, date);
    }

    getOrderByDay(day: string): Observable<OrderLunchModel> {
        return this.apiService.getOrderByDay(this.url, day);
    }

    createOrder(order: OrderLunchModel): Observable<OrderLunchModel> {
        return this.apiService.createOrder(this.url, order);
    }

    removeOrder(orderId: any): Observable<any> {
        return this.apiService.removeOrder(this.url, orderId);
    }

    updateOrder(orderId: string, order: any): Observable<any> {
        return this.apiService.updateOrder(this.url, orderId, order);
    }

    public currentOrderChanged(order: OrderLunchModel): void {
        this.currentOrderSource.next(order);
    }

    public getDishGroupOrder(dishGroupName: string, orderLunch: OrderLunchModel): OrderDishGroupModel | undefined {
        return orderLunch ?
            orderLunch.dishList.filter((orderDishGroup: OrderDishGroupModel) => orderDishGroup.name === dishGroupName)[0] :
            undefined;
    }
}
