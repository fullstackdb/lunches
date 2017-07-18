import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
    LunchMenuService
} from '../../../services/index';
import {
    ILunchWeekMenu
} from '../../../models/index';

@Component({
    selector: 'lunch-table',
    styles  : [
        require('./dashboard.component.scss')
    ],
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit, OnDestroy {
    private getMenuSubscription: Subscription;
    private menu: ILunchWeekMenu;

    constructor(private lunchMenuService: LunchMenuService) {
    }

    ngOnInit(): void {
        this.getMenu();
    }

    ngOnDestroy(): void {
        this.getMenuSubscription.unsubscribe();
    }

    private getMenu(): void {
        this.getMenuSubscription = this.lunchMenuService.getMenu().subscribe(
            (lunchMenu: ILunchWeekMenu) => {
                if (lunchMenu) {
                    this.menu = lunchMenu;
                }
            });
    }
}
