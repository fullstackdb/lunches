import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LunchDaysService } from '../../../services/index';
import {
    ILunchDay
} from '../../../models/index';
import { lunchDayListResponse } from '../../../../../mocks/dashboard/lunchDayResponse';
import { LunchOrderService } from '../../../services/lunch-order.service';
import { OrderDishGroupModel, OrderLunchDayModel, IOrderDailyLunch } from '../../../models/index';

@Component({
    selector: 'days-table',
    styles  : [
        require('./lunch-days-table.component.scss')
    ],
    template: require('./lunch-days-table.component.html')
})

export class DaysTableComponent implements OnInit, OnDestroy {
    private daysList: ILunchDay[] = lunchDayListResponse;
    private daysListSubscription: Subscription;
    private orderSubscription: Subscription;
    private requestedDishesSubscription: Subscription;
    private currentOrder: IOrderDailyLunch;
    private requestedDishes: OrderDishGroupModel[];

    constructor(private lunchDaysService: LunchDaysService,
                private lunchOrderService: LunchOrderService) {
    }

    ngOnInit(): void {
        this.daysListSubscription = this.lunchDaysService.DaysList$
            .subscribe((lunchMenu: ILunchDay[]) => {
                if (lunchMenu) {
                    this.daysList = lunchMenu;
                }
            });
        this.orderSubscription = this.lunchOrderService.CurrentOrder$
            .subscribe((currentOrder: IOrderDailyLunch) => {
                this.currentOrder = currentOrder;
            });
        this.requestedDishesSubscription = this.lunchOrderService.RequestedDishes$
            .subscribe((requestedDishes: OrderDishGroupModel[]) => {
                console.log('requestedDishes', requestedDishes);
                this.requestedDishes = requestedDishes;
            });
    }

    ngOnDestroy(): void {
        this.daysListSubscription.unsubscribe();
        this.orderSubscription.unsubscribe();
        this.requestedDishesSubscription.unsubscribe();
    }

    public getCurrentDishesByDate(date: string): OrderDishGroupModel {
        if(this.currentOrder) {
            return this.currentOrder.orderDay.dishGroup.filter((orderDishGroup: OrderDishGroupModel) => orderDishGroup.date ===  date)[0];
        }
    }

    public getRequestedDishesByDate(date: string): OrderDishGroupModel[] {
        if(this.requestedDishes && date === 'Monday') {
            return this.requestedDishes;
            // return this.requestedDishes.filter((orderDishGroup: OrderDishGroupModel) => orderDishGroup.date ===  date);
        }
    } 
}
