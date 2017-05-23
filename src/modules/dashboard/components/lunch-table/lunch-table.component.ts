import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { LunchDashboardService } from '../../services/lunch-dashboard.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'lunch-table',
    styles  : [
        require('./lunch-table.component.scss')
    ],
    template: require('./lunch-table.component.html')
})

export class LunchTableComponent implements OnInit, OnDestroy {
    getOrderSubscription: Subscription;
    orderList: any[];

    constructor(private lunchService: LunchDashboardService) {
    }

    ngOnInit() {
        this.placeOrder();
    }

    ngOnDestroy() {
        this.getOrderSubscription.unsubscribe();
    }

    getOrderList(): void {
        this.getOrderSubscription = this.lunchService.getOrderList().subscribe((orderList: any[]) => {
            console.log('getOrderList', orderList);
            this.orderList = orderList;
        });
    }

    placeOrder(): void {
        this.lunchService.createOrder({orderId: 1, isItWorks: true}).then((orderList: any[]) => {
            console.log('placeOrder', orderList);
        });
        this.getOrderList();
    }
}
