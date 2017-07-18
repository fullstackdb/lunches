import { ILunchDishGroup } from './lunch-dish-group.interface';

export interface ILunchDailyMenu {
    date: string;
    dayFriendlyName: string;
    dayOfWeek: number;
    dishGroup: ILunchDishGroup[];
}
