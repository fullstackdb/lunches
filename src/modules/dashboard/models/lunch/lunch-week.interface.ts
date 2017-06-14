import { ILunchDailyMenu } from './lunch-menu.interface';

export interface ILunchWeekMenu {
    orderList: ILunchDailyMenu[];
    currentDay: string;
    week: number;
}
