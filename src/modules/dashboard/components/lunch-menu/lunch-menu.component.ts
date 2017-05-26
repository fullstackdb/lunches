import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {
    LunchDashboardService,
    LunchMenuService
} from '../../services/index';

@Component({
    selector: 'lunch-menu',
    styles  : [
        require('./lunch-menu.component.scss')
    ],
    template: require('./lunch-menu.component.html')
})

export class LunchMenuComponent implements OnInit, OnDestroy {
    getMenuSubscription: Subscription;
    menu: any;
    updatedOrder: any;

    constructor(private lunchMenuService: LunchMenuService,
                private lunchDashboardService: LunchDashboardService) {
    }

    ngOnInit() {
        this.getMenu();
    }

    ngOnDestroy() {
        this.getMenuSubscription.unsubscribe();
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.getMenu().subscribe(
            (orderList: any[]) => {
                console.log('getMenu', orderList);
                this.updatedOrder = orderList;
            });
    }

    private orderChanged(orderDishGroup: any): void {
        this.updatedOrder = {orderId: 1, isItWorks: true};
        this.placeOrder(this.updatedOrder);
    }

    private placeOrder(order: any): void {
        this.lunchDashboardService.createOrder(order).then(
            (orderList: any) => {
                console.log('placeOrder', orderList);
            });
    }
}
