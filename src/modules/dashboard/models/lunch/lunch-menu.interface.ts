import { ILunchDishGroup } from './lunch-dish-group.interface';

export interface ILunchMenu {
    id: string;
    name: string;
    dishGroupList: ILunchDishGroup[];
}
