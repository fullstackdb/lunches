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
} from '../../../services/index';
import {
    ILunchDailyMenu,
    OrderDishGroupModel,
    IOrderDailyLunch,
    ILunchWeekMenu,
    ILunchDay,
    IOrderDishGroupResponse,
    OrderLunchDayModel
} from '../../../models/index';
import { Utils } from '../../../services/utils';

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
    private lunchDay: ILunchDay;
    private menu: ILunchDailyMenu;
    private orderDailyLunch: IOrderDailyLunch;
    private orderDishGroupRequest: OrderLunchDayModel;
    private getMenuSubscription: Subscription;
    private getOrderSubscription: Subscription;
    private getDaysListSubscription: Subscription;

    constructor(private lunchMenuService: LunchMenuService,
                private lunchOrderService: LunchOrderService,
                private lunchDaysService: LunchDaysService,
                private activatedRoute: ActivatedRoute,
                private utils: Utils) {
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                this.getDayInfo(lunchDayName);
            });
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
        this.getDaysListSubscription.unsubscribe();
        this.getOrderSubscription.unsubscribe();
    }

    public isEmpty(): boolean {
        return !Boolean(this.menu && this.menu.dishGroup);
    }

    public onOrderDishGroupPlaced(orderDishGroup: OrderDishGroupModel): void {
        this.orderDishGroupRequest.dishGroup = orderDishGroup;
        this.placeOrder();
    }

    public onOrderDishGroupRemoved(orderDishGroup: OrderDishGroupModel): void {
        this.orderDishGroupRequest.dishGroup = orderDishGroup;
        this.removeOrder();
    }

    public getDishGroupOrder(dishGroupName: string): OrderDishGroupModel {
        return this.lunchOrderService.getDishGroupOrder(dishGroupName, this.orderDailyLunch) || {} as OrderDishGroupModel;
    }

    private getDayInfo(dayFriendlyName: string): void {
        this.getDaysListSubscription = this.lunchDaysService.DaysList$
            .subscribe((lunchDaysList: ILunchDay[]) => {
                if (lunchDaysList) {
                    this.lunchDay = this.lunchDaysService.getDayInfoByName(dayFriendlyName);
                    this.getMenu();
                    this.getOrder();
                }
            });
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.LunchMenu$
            .subscribe((lunchMenu: ILunchWeekMenu) => {
                this.menu = this.lunchMenuService.getDailyMenu(this.lunchDay.dayFriendlyName, lunchMenu);
                this.orderDishGroupRequest = new OrderLunchDayModel(this.menu.date);
            });
    }

    private getOrder(): void {
        this.lunchOrderService.getOrderByDate(this.lunchDay.date).subscribe(
            (order: IOrderDailyLunch) => {
                console.log('getOrder', order);
                this.orderDailyLunch = order;
            },
            (err: any) => {
                console.error('getOrder err', err);
            });
    }

    private placeOrder(): void {
        this.lunchOrderService.placeOrder(this.orderDishGroupRequest).subscribe(
            (orderStatus: IOrderDishGroupResponse) => {
                if (orderStatus.success) {
                    console.log('placeOrder', orderStatus);
                    this.getOrder();
                    //this.lunchOrderService.currentOrderChanged(order);
                }
            });
    }

    private removeOrder(): void {
        this.lunchOrderService.removeOrder(this.orderDishGroupRequest).subscribe(
            (orderStatus: IOrderDishGroupResponse) => {
                if (orderStatus.success) {
                    console.log('removeOrder', orderStatus);
                    this.getOrder();
                }
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

    //private addOrderDishGroupIntoOrder(orderDishGroup: OrderDishGroupModel): void {
    //    if (this.isOrderLunchContainOrderGroup(orderDishGroup)) {
    //        this.replaceOrderGroup(orderDishGroup);
    //    } else {
    //        this.orderLunch.dishList.push(orderDishGroup);
    //    }
    //}
    //
    //private isOrderLunchContainOrderGroup(orderGroup: OrderDishGroupModel): boolean {
    //    return this.orderLunch && this.orderLunch.dishList
    //        ? this.orderLunch.dishList.some((lunchOrderGroup: any) => lunchOrderGroup.name === orderGroup.name)
    //        : false;
    //}
    //
    //private replaceOrderGroup(orderGroup: OrderDishGroupModel): void {
    //    this.orderLunch.dishList.map((lunchOrderGroup: OrderDishGroupModel) => {
    //        if (lunchOrderGroup && lunchOrderGroup.name === orderGroup.name) {
    //            lunchOrderGroup.dishList = orderGroup.dishList;
    //        }
    //        return lunchOrderGroup;
    //    });
    //}
}
