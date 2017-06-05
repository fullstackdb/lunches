import { ILunchDish } from '../lunch/lunch-dish.interface';
import { IPriceInfo } from './price-info.interface';

export class OrderDishModel {
    date: Date;
    dish: ILunchDish | null;
    count: number;
    priceInfo: IPriceInfo;

    constructor(date?: Date, dish?: ILunchDish) {
        this.date = date || new Date();
        this.dish = dish || null;
        this.count = 1;
    }
}
