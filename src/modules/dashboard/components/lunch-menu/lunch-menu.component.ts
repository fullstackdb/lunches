import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {
    LunchDashboardService,
    LunchMenuService
} from '../../services/index';
import { ActivatedRoute } from '@angular/router';

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
                private lunchDashboardService: LunchDashboardService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                console.log('LunchDayComponent', lunchDayName);
                this.getMenu();
            });
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
        this.lunchDashboardService.createOrder(order).subscribe(
            (orderList: any) => {
                console.log('placeOrder', orderList);
            });
    }
}
