import { IPriceInfo } from './price-info.interface';
import { OrderDishModel } from './order-dish.model';

export class OrderDishGroupModel {
    id: string;
    name: string;
    date: Date | null;
    dishList: OrderDishModel[];
    priceInfo: IPriceInfo;

    constructor(date?: Date, dishList?: OrderDishModel[]) {
        this.id = '1';
        this.date = date || new Date();
        this.dishList = dishList || [] as OrderDishModel[];
    }
}
