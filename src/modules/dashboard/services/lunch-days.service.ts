import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import {
    ILunchDaysService,
    ILunchDailyMenu,
    ILunchWeekMenu,
    ILunchDay
} from '../models/index';

@Injectable()
export class LunchDaysService implements ILunchDaysService {
    private lunchDayList: ILunchDay[];
    private currentLunchDay: ILunchDay;
    private daysListSource: ReplaySubject<ILunchDay[]> = new ReplaySubject<ILunchDay[]>(1);

    public DaysList$: Observable<ILunchDay[]> = this.daysListSource.asObservable();

    public setLunchDays(lunchMenu: ILunchWeekMenu): void {
        this.lunchDayList = LunchDaysService.getDaysList(lunchMenu);
        this.currentLunchDay = this.getDayInfoByName(lunchMenu.currentDay);
        this.daysListSource.next(this.lunchDayList);
    }

    public isCurrentDay(lunchDay: ILunchDay): boolean {
        return Boolean(lunchDay.dayFriendlyName === this.currentLunchDay.dayFriendlyName);
    }

    public getDayInfoByName(dayName: string): ILunchDay | null {
        return this.lunchDayList && dayName
            ? this.lunchDayList.filter((lunchDay: ILunchDay) => lunchDay.dayFriendlyName.toLowerCase() === dayName.toLowerCase())[0]
            : null;
    }

    private static getDaysList(lunchMenu: ILunchWeekMenu): ILunchDay[] | null {
        return lunchMenu && lunchMenu.orderList
            ? lunchMenu.orderList.map((lunchDailyMenu: ILunchDailyMenu) => {
                return {
                    date           : lunchDailyMenu.date,
                    dayFriendlyName: lunchDailyMenu.dayFriendlyName,
                    dayOfWeek      : lunchDailyMenu.dayOfWeek
                };
            })
            : null;
    }
}
