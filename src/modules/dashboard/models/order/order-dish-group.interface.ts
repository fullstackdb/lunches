import { IPriceInfo } from './price-info.interface';
import { IOrderDish } from './order-dish.interface';

export interface IOrderDishGroup {
    id: string;
    name: string;
    dishList: IOrderDish[];
    priceInfo: IPriceInfo;
}
