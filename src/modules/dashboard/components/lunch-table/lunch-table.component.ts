import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
    LunchOrderService,
    LunchMenuService
} from '../../services/index';
import {
    OrderLunchModel,
    ILunchWeekMenu
} from '../../models/index';

@Component({
    selector: 'lunch-table',
    styles  : [
        require('./lunch-table.component.scss')
    ],
    template: require('./lunch-table.component.html')
})
export class LunchTableComponent implements OnInit, OnDestroy {
    private getMenuSubscription: Subscription;
    private getOrderSubscription: Subscription;
    private orderLunch: OrderLunchModel[];
    private menu: ILunchWeekMenu;

    constructor(private lunchMenuService: LunchMenuService,
                private lunchOrderService: LunchOrderService,) {
    }

    ngOnInit(): void {
        this.getMenu();
        this.getOrder();
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
        this.getOrderSubscription.unsubscribe();
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.getMenu().subscribe(
            (lunchMenu: ILunchWeekMenu) => {
                if (lunchMenu) {
                    this.menu = lunchMenu;
                }
            });
    }

    private getOrder(): void {
        this.getOrderSubscription = this.lunchOrderService.getOrderList().subscribe(
            (order: OrderLunchModel[]) => {
                if (order) {
                    this.orderLunch = order;
                }
            });
    }
}
