import { OrderDishGroupModel } from './order-dish-group.model';

export interface IOrderUserLunch {
    userName: string;
    userOrder: OrderDishGroupModel[];
}
