import { ILunchDailyMenu } from './lunch-menu.interface';

export interface ILunchWeekMenu {
    dayMenuList: ILunchDailyMenu[];
    currentDay: string;
    week: number;
}
