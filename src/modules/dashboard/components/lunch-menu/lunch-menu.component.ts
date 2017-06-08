import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {
    LunchOrderService,
    LunchMenuService
} from '../../services/index';
import {
    ILunchMenu,
    OrderDishGroupModel,
    OrderLunchModel
} from '../../models/index';
import { Utils } from '../../services/utils';
import { lunchMenuMock } from '../../../../mocks/dashboard/lunchMenuMock';

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
                private lunchOrderService: LunchOrderService,
                private activatedRoute: ActivatedRoute,
                private utils: Utils) {
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                this.lunchDayName = lunchDayName;
                this.getMenu();
                this.getOrder();
            });
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
        this.getMenuSubscription.unsubscribe();
    }

    public onOrderDishGroupPlaced(orderDishGroup: OrderDishGroupModel): void {
        this.addOrderDishGroupIntoOrder(orderDishGroup);
        this.placeOrder();
    }

    public getDishGroupOrder(dishGroupName: string): OrderDishGroupModel {
        return this.lunchOrderService.getDishGroupOrder(dishGroupName, this.orderLunch);
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.getMenu().subscribe(
            (lunchMenu: ILunchMenu) => {
                console.log('getMenu', lunchMenu);
                if (lunchMenu) {
                    this.menu = lunchMenu;
                }
            });
    }

    private getOrder(): void {
        this.getMenuSubscription = this.lunchOrderService.getOrderByDay(this.lunchDayName).subscribe(
            (order: OrderLunchModel) => {
                console.log('getOrder', order);
                if (order) {
                    this.orderLunch = order;
                }
            });
    }

    private placeOrder(): void {
        this.lunchOrderService.createOrder(this.orderLunch).subscribe(
            (order: OrderLunchModel) => {
                console.log('placeOrder', order);
                this.orderLunch = order;
                this.lunchOrderService.currentOrderChanged(order);
            });
    }

    /**
     * @override
     * temporary mock solution
     */
    private placeMockMenu(): void {
        this.lunchMenuService.placeMenu(lunchMenuMock).subscribe(
            (resp: any) => {
                console.log('placeMockMenu', resp);
            });
    }

    private addOrderDishGroupIntoOrder(orderDishGroup: OrderDishGroupModel): void {
        if (!this.isOrderLunchContainOrderGroup(this.orderLunch, orderDishGroup)) {
            this.orderLunch.dishOrdersList.push(orderDishGroup);
        } else {
            this.replaceOrderGroup(orderDishGroup);
        }
    }

    private isOrderLunchContainOrderGroup(orderLunch: OrderLunchModel, orderGroup: OrderDishGroupModel): boolean {
        return orderLunch.dishOrdersList.some((lunchOrderGroup: any) => {
            return lunchOrderGroup.name === orderGroup.name;
        });
    }

    private replaceOrderGroup(orderGroup: OrderDishGroupModel): void {
        this.orderLunch.dishOrdersList.map((lunchOrderGroup: OrderDishGroupModel) => {
            if (lunchOrderGroup.name === orderGroup.name && lunchOrderGroup.dishList.length) {
                lunchOrderGroup.dishList = orderGroup.dishList;
            }
            return lunchOrderGroup;
        });
    }
}
