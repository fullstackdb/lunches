import { IPriceInfo } from './price-info.interface';
import { IOrderDishGroup } from './order-dish-group.interface';

export interface IOrderLunch {
    id: string;
    name: string;
    status: string;
    date: Date;
    dishOrdersList: IOrderDishGroup[];
    priceInfo: IPriceInfo;
}
