import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { UserService } from '../../auth/index';

import {
    ILunchOrderService,
    IOrderDailyLunch,
    OrderDishGroupModel,
    IOrderDishGroupResponse,
    OrderLunchDayModel,
    IOrderAllUsersLunches
} from '../models/index';
import { ApiLunchOrderService } from './api-lunch-order.service';

@Injectable()
export class LunchOrderService implements ILunchOrderService {
    private userID: string;
    private url: string;
    private currentOrderSource = new ReplaySubject<IOrderDailyLunch>(1);

    public CurrentOrder$ = this.currentOrderSource.asObservable();

    constructor(private apiService: ApiLunchOrderService, userService: UserService) {
        this.userID = userService.user.tokenId;
        this.url = `/orders/${this.userID}`;
    }

    getOrderList(): Observable<IOrderDailyLunch[]> {
        return this.apiService.getOrderList(this.url);
    }

    getOrderByDate(dayDate: string): Observable<IOrderDailyLunch> {
        return this.apiService.getOrderByDate(this.userID, dayDate);
    }

    getAllUsersOrderByDate(lunchDayName: string): Observable<IOrderAllUsersLunches> {
        switch (lunchDayName) {
            case 'current':
                return this.getAllUsersOrderCurrentDate();
            case 'next':
                return this.getAllUsersOrderNextDate();
            default:
                return this.getAllUsersOrderCurrentDate();
        }
    }

    getAllUsersOrderCurrentDate(): Observable<IOrderAllUsersLunches> {
        return this.apiService.getAllUsersOrderCurrentDate();
    }

    getAllUsersOrderNextDate(): Observable<IOrderAllUsersLunches> {
        return this.apiService.getAllUsersOrderNextDate();
    }

    placeOrder(order: OrderLunchDayModel): Observable<IOrderDishGroupResponse> {
        order.tokenId = this.userID;
        return this.apiService.placeOrder(order);
    }

    removeOrder(order: OrderLunchDayModel): Observable<any> {
        order.tokenId = this.userID;
        return this.apiService.removeOrder(order);
    }

    updateOrder(orderId: string, order: any): Observable<any> {
        return this.apiService.updateOrder(this.url, orderId, order);
    }

    public currentOrderChanged(order: IOrderDailyLunch): void {
        this.currentOrderSource.next(order);
    }

    public getDishGroupOrder(dishGroupName: string, orderLunch: IOrderDailyLunch): OrderDishGroupModel | undefined {
        return orderLunch && orderLunch.orderDay ?
            orderLunch.orderDay.dishGroup.filter((orderDishGroup: OrderDishGroupModel) => orderDishGroup.name === dishGroupName)[0] :
            undefined;
    }
}
