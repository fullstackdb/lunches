import { ILunchDish } from '../lunch/lunch-dish.interface';
import { IPriceInfo } from './price-info.interface';

export interface IOrderDish {
    dish: ILunchDish;
    count: number;
    priceInfo: IPriceInfo;
}
