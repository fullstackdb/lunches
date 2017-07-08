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
import { OrderDishGroupModel, IOrderDailyLunch } from '../../../models/index';

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
    private requestedDishes: any;

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
                this.requestedDishes = requestedDishes;
            });
    }

    ngOnDestroy(): void {
        this.daysListSubscription.unsubscribe();
        this.orderSubscription.unsubscribe();
        this.requestedDishesSubscription.unsubscribe();
    }
}
