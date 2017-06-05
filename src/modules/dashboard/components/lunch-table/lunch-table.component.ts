import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { LunchOrderService } from '../../services/lunch-order.service';
import { Subscription } from 'rxjs/Subscription';
import { OrderLunchModel } from '../../models/order/order-lunch.model';

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

    constructor(private lunchService: LunchOrderService) {
    }

    ngOnInit() {
        this.getOrderList();
    }

    ngOnDestroy() {
        this.getOrderSubscription.unsubscribe();
    }

    private getOrderList(): void {
        this.getOrderSubscription = this.lunchService.getOrderList().subscribe(
            (orderList: any[]) => {
                console.log('getOrderList', orderList);
                this.orderList = orderList;
            });
    }
}
