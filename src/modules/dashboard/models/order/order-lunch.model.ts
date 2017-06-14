import { IPriceInfo } from './price-info.interface';
import { OrderDishGroupModel } from './order-dish-group.model';

export class OrderLunchModel {
    id: string;
    name: string;
    status: boolean;
    date: string;
    dishList: OrderDishGroupModel[] | null;
    priceInfo: IPriceInfo;

    constructor(date?: string, dishOrdersList?: OrderDishGroupModel[]) {
        this.status = false;
        this.date = date || new Date().toDateString();
        this.dishList = dishOrdersList || [] as OrderDishGroupModel[];
    }
}
