import { OrderDishGroupModel } from './order-dish-group.model';

export class OrderLunchDayModel {
    date: string;
    tokenId: string;
    dishGroup: OrderDishGroupModel;

    constructor(date: string) {
        this.date = date;
    }
}
