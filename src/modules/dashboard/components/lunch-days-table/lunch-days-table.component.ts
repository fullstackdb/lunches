import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ILunchDay } from '../../models/lunch/lunch-day.interface';
import { LunchMenuService } from '../../services/lunch-menu.service';
import { ILunchWeekMenu } from '../../models/index';

@Component({
    selector: 'days-table',
    styles  : [
        require('./lunch-days-table.component.scss')
    ],
    template: require('./lunch-days-table.component.html')
})

export class DaysTableComponent implements OnInit, OnDestroy {
    private daysList: ILunchDay[];
    private getMenuSubscription: Subscription;

    constructor(private lunchMenuService: LunchMenuService) {
    }

    ngOnInit(): void {
        this.getMenuSubscription = this.lunchMenuService.LunchMenu$
            .subscribe((lunchMenu: ILunchWeekMenu) => {
                this.daysList = this.lunchMenuService.getDaysList(lunchMenu);
            });
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
    }
}
