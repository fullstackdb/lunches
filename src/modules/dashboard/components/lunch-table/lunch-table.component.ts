import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { LunchDashboardService } from '../../services/lunch-dashboard.service';
import { Subscription } from 'rxjs/Subscription';
import { IOrderLunch } from '../../models/order/order-lunch.interface';

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
