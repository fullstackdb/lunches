import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Utils } from '../../../services/utils';
import {
    LunchOrderService
} from '../../../services/index';
import { IOrderAllUsersLunches } from '../../../models/index';

@Component({
    selector : 'all-users-order',
    styles   : [
        require('./all-users-order.component.scss')
    ],
    template : require('./all-users-order.component.html'),
    providers: [
        Utils
    ]
})
export class AllUsersOrderComponent implements OnInit, OnDestroy {
    private allUsersOrderSubscription: Subscription;
    private allUsersOrder: IOrderAllUsersLunches;
    public availableDishGroupList: {name: string;}[];

    constructor(private lunchOrderService: LunchOrderService,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.activatedRoute.params
            .map(params => params.day)
            .subscribe((lunchDayName: string) => {
                this.getAllUsersOrder(lunchDayName);
            });
    }

    public ngOnDestroy(): void {
        this.allUsersOrderSubscription.unsubscribe();
    }

    private getAllUsersOrder(lunchDayName: string): void {
        this.allUsersOrderSubscription = this.lunchOrderService.getAllUsersOrderByDate(lunchDayName)
            .subscribe((allUsersOrder: IOrderAllUsersLunches) => {
                console.log('allUsersOrderSubscription', allUsersOrder);
                this.allUsersOrder = allUsersOrder;
                this.availableDishGroupList = allUsersOrder.availableDishGroupsNames;

            });
    }
}
