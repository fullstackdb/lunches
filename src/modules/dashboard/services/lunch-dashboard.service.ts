import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth';
import { ILunchDashboardService } from '../models/services/lunch-dashboard.interface';

@Injectable()
export class LunchDashboardService implements ILunchDashboardService {
    private orderList$: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, auth: AuthService, db: AngularFireDatabase) {
        const path = `/orders/${auth.id}`;

        console.log(auth.id);
        this.orderList$ = db.list(path);

        //this.filteredTasks$ = af.database.list(path, {
        //    query: {
        //        orderByChild: 'completed',
        //        equalTo     : this.filter$
        //    }
        //});
    }

    getOrderList(): Observable<any> {
        return this.orderList$;
    }

    getOrderByDate(date: Date): Observable<any> {
        return this.orderList$;
    }

    createOrder(order: any): firebase.Promise<any> {
        return this.orderList$.push(order);
    }

    removeOrder(date: Date, orderId: any): firebase.Promise<any> {
        return this.orderList$.remove(orderId);
    }

    updateOrder(date: Date, order: any): firebase.Promise<any> {
        return this.orderList$.update(order.orderId, order);
    }
}
