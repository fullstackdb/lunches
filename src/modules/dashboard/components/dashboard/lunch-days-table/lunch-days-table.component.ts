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

@Component({
    selector: 'days-table',
    styles  : [
        require('./lunch-days-table.component.scss')
    ],
    template: require('./lunch-days-table.component.html')
})

export class DaysTableComponent implements OnInit, OnDestroy {
    private daysList: ILunchDay[];
    private daysListSubscription: Subscription;

    constructor(private lunchDaysService: LunchDaysService) {
    }

    ngOnInit(): void {
        this.daysListSubscription = this.lunchDaysService.DaysList$
            .subscribe((lunchMenu: ILunchDay[]) => {
                if (lunchMenu) {
                    this.daysList = lunchMenu;
                }
            });
    }

    ngOnDestroy(): void {
        this.daysListSubscription.unsubscribe();
    }
}
