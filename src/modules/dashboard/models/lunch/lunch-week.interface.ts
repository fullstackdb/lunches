import { ILunchDailyMenu } from './lunch-menu.interface';

export interface ILunchWeekMenu {
    orderList: ILunchDailyMenu[];
    week: number;
}
