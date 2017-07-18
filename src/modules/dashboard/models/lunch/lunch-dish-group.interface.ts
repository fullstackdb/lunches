import { ILunchDish } from './lunch-dish.interface';

export interface ILunchDishGroup {
    id: string;
    name: string;
    description: string;
    dishes: ILunchDish[];
}
