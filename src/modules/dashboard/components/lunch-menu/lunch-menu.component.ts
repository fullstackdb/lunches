import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {
    LunchDashboardService,
    LunchMenuService
} from '../../services/index';
import {
    ILunchMenu,
    OrderDishGroupModel,
    OrderLunchModel
} from '../../models/index';
import { Utils } from '../../services/utils';

@Component({
    selector : 'lunch-menu',
    styles   : [
        require('./lunch-menu.component.scss')
    ],
    template : require('./lunch-menu.component.html'),
    providers: [
        Utils
    ]
})

export class LunchMenuComponent implements OnInit, OnDestroy {
    private getMenuSubscription: Subscription;
    private lunchDayName: string;
    private menu: ILunchMenu;
    private orderLunch: OrderLunchModel;

    constructor(private lunchMenuService: LunchMenuService,
                private lunchDashboardService: LunchDashboardService,
                private activatedRoute: ActivatedRoute,
                private utils: Utils) {
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                this.lunchDayName = lunchDayName;
                this.getMenu();
                this.orderLunch = new OrderLunchModel();
            });
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.getMenu().subscribe(
            (orderList: ILunchMenu[]) => {
                if (orderList && orderList.length) {
                    console.log('getMenu', orderList);
                    this.menu = orderList[0];
                }
            });
    }

    private placeOrder(): void {
        console.log('placeOrder', this.orderLunch);
        //this.lunchDashboardService.createOrder(order).subscribe(
        //    (orderList: any) => {
        //        console.log('placeOrder', orderList);
        //    });
    }

    //private placeMockMenu(): void {
    //    this.lunchMenuService.placeMenu(lunchMenuMock).subscribe(
    //        (resp: any) => {
    //            console.log('placeMockMenu', resp);
    //        });
    //}
    private isOrderLunchContainOrderGroup(orderLunch: OrderLunchModel, orderGroup: OrderDishGroupModel): boolean {
        return orderLunch.dishOrdersList.some((lunchOrderGroup: any) => lunchOrderGroup.name  === orderGroup.name);
    }

    private addOrderDishGroupIntoOrder(orderDishGroup: OrderDishGroupModel): void {
        console.log(!this.isOrderLunchContainOrderGroup(this.orderLunch, orderDishGroup));
        if (!this.isOrderLunchContainOrderGroup(this.orderLunch, orderDishGroup)) {
            this.orderLunch.dishOrdersList.push(orderDishGroup);
        }
    }

    public onOrderDishGroupPlaced(orderDishGroup: OrderDishGroupModel): void {
        this.addOrderDishGroupIntoOrder(orderDishGroup);
        this.placeOrder();
    }
}
