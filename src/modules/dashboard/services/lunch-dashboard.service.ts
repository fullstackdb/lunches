import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../auth/index';
import { ILunchDashboardService } from '../models/services/lunch-dashboard.interface';
import { FirebaseApiService } from '../../firebase/firebase.api.service';
import { OrderLunchModel } from '../models/index';

@Injectable()
export class LunchDashboardService implements ILunchDashboardService {
    private userID: string;
    private url: string;

    constructor(private apiService: FirebaseApiService, userService: UserService) {
        this.userID = userService.user.id;
        this.url = `/orders/${this.userID}`;
    }

    getOrderList(): Observable<OrderLunchModel[]> {
        return this.apiService.get<any>(this.url);
    }

    getOrderByDate(date: Date): Observable<OrderLunchModel[]> {
        return  this.apiService.getByQuery<OrderLunchModel>(this.url, {});
    }

    createOrder(order: any = {}): Observable<any> {
        return  this.apiService.create<any>(this.url, order);
    }

    removeOrder(orderId: any): Observable<any> {
        return  this.apiService.delete(this.url, orderId);
    }

    updateOrder(orderId: string, order: any): Observable<any> {
        return  this.apiService.update(this.url, orderId, order);
    }
}
