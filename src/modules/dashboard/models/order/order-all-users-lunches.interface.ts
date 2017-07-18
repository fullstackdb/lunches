import { IOrderUserLunch } from './order-user-lunch.interface';

export interface IOrderAllUsersLunches {
    date: string;
    dayFriendlyName: string;
    availableDishGroupsNames: {name: string;}[];
    usersLunchesList: IOrderUserLunch[];
}
