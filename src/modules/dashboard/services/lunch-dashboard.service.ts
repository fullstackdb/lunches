import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ILunchDashboardService } from '../models/services/lunch-dashboard.interface';
import { FirebaseApiService } from '../../firebase/firebase.api.service';
import { AuthService } from '../../auth/services/auth-service';
import { IOrderLunch } from '../models/index';

@Injectable()
export class LunchDashboardService implements ILunchDashboardService {
    private userID: string;
    private url: string;

    constructor(private apiService: FirebaseApiService, auth: AuthService) {
        this.userID = auth.id;
        this.url = `/orders/${this.userID}`;
    }

    getOrderList(): Observable<IOrderLunch[]> {
        return this.apiService.get<any>(this.url);
    }

    getOrderByDate(date: Date): Observable<IOrderLunch[]> {
        return  this.apiService.getByQuery<IOrderLunch>(this.url, {});
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
