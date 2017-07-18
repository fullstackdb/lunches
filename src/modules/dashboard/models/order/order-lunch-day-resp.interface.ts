import { OrderDishGroupModel } from './order-dish-group.model';

export interface IOrderLunchDayResp {
    date: string;
    dishGroup: OrderDishGroupModel[];
}
