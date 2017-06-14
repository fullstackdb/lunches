import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {
    LunchOrderService,
    LunchMenuService,
    LunchDaysService
} from '../../services/index';
import {
    ILunchDailyMenu,
    OrderDishGroupModel,
    OrderLunchModel,
    ILunchWeekMenu,
    ILunchDay
} from '../../models/index';
import { Utils } from '../../services/utils';

@Component({
    selector : 'lunch-menu',
    styles   : [
        require('./lunch-daily-menu.component.scss')
    ],
    template : require('./lunch-daily-menu.component.html'),
    providers: [
        Utils
    ]
})
export class LunchMenuComponent implements OnInit, OnDestroy {
    private lunchDay: ILunchDay | null;
    private menu: ILunchDailyMenu;
    private orderLunch: OrderLunchModel;
    private getMenuSubscription: Subscription;

    constructor(private lunchMenuService: LunchMenuService,
                private lunchOrderService: LunchOrderService,
                private lunchDaysService: LunchDaysService,
                private activatedRoute: ActivatedRoute,
                private utils: Utils) {
    }

    ngOnInit(): void {
        this.orderLunch = new OrderLunchModel(`${new Date()}`, [] as OrderDishGroupModel[]);
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                this.lunchDay = this.lunchDaysService.getDayInfoByName(lunchDayName);
                console.log('LunchMenuComponent ', lunchDayName, this.lunchDay);
                this.getMenu();
                this.getOrder();
            });
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
    }

    public isEmpty(): boolean {
        return !Boolean(this.menu && this.menu.dishGroup);
    }

    public onOrderDishGroupPlaced(orderDishGroup: OrderDishGroupModel): void {
        this.addOrderDishGroupIntoOrder(orderDishGroup);
        this.placeOrder();
    }

    public getDishGroupOrder(dishGroupName: string): OrderDishGroupModel {
        return this.lunchOrderService.getDishGroupOrder(dishGroupName, this.orderLunch) || {} as OrderDishGroupModel;
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.LunchMenu$
            .subscribe((lunchMenu: ILunchWeekMenu) => {
                this.menu = this.lunchMenuService.getDailyMenu(this.lunchDay.dayFriendlyName, lunchMenu);
                this.orderLunch.date = this.menu.date;
            });
    }

    private getOrder(): void {
        this.getMenuSubscription = this.lunchOrderService.getOrderByDay(this.lunchDay.dayFriendlyName).subscribe(
            (order: OrderLunchModel | null) => {
                if (order) {
                    this.orderLunch = order;
                }
            });
    }

    private placeOrder(): void {
        this.lunchOrderService.createOrder(this.orderLunch).subscribe(
            (order: OrderLunchModel) => {
                this.orderLunch = order;
                this.lunchOrderService.currentOrderChanged(order);
            });
    }

    /**
     * @override
     * temporary mock solution
     */
    //private placeMockMenu(): void {
    //    this.lunchMenuService.placeMenu(lunchMenuMock).subscribe(
    //        (resp: any) => {
    //            console.log('placeMockMenu', resp);
    //        });
    //}

    private addOrderDishGroupIntoOrder(orderDishGroup: OrderDishGroupModel): void {
        if (this.isOrderLunchContainOrderGroup(orderDishGroup)) {
            this.replaceOrderGroup(orderDishGroup);
        } else {
            this.orderLunch.dishList.push(orderDishGroup);
        }
    }

    private isOrderLunchContainOrderGroup(orderGroup: OrderDishGroupModel): boolean {
        return this.orderLunch && this.orderLunch.dishList
            ? this.orderLunch.dishList.some((lunchOrderGroup: any) => lunchOrderGroup.name === orderGroup.name)
            : false;
    }

    private replaceOrderGroup(orderGroup: OrderDishGroupModel): void {
        this.orderLunch.dishList.map((lunchOrderGroup: OrderDishGroupModel) => {
            if (lunchOrderGroup && lunchOrderGroup.name === orderGroup.name) {
                lunchOrderGroup.dishList = orderGroup.dishList;
            }
            return lunchOrderGroup;
        });
    }
}
