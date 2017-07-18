import { Observable } from 'rxjs/Observable';
import {
    ILunchDailyMenu,
    ILunchDishGroup,
    ILunchWeekMenu,
    ILunchDish
} from '../lunch/index';
import { ILunchDay } from '../lunch/lunch-day.interface';

export interface ILunchDaysService {
    DaysList$: Observable<ILunchDay[]>;
    setLunchDays(lunchMenu: ILunchWeekMenu): void;
    getDayInfoByName(dayName: string): ILunchDay;
    isCurrentDay(lunchDay: ILunchDay): boolean;
}
