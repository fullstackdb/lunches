import { IPriceInfo } from './price-info.interface';
import { OrderDishGroupModel } from './order-dish-group.model';

export class OrderLunchModel {
    id: string;
    name: string;
    status: boolean;
    date: Date;
    dishOrdersList: OrderDishGroupModel[] | null;
    priceInfo: IPriceInfo;

    constructor(date?: Date, dishOrdersList?: OrderDishGroupModel[]) {
        this.status = false;
        this.date = date || new Date();
        this.dishOrdersList = dishOrdersList || [] as OrderDishGroupModel[];
    }
}
