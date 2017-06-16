import { Observable } from 'rxjs/Observable';
import { IOrderDailyLunch } from '../order/index';

export interface ILunchOrderService {
    getOrderList(): Observable<IOrderDailyLunch[]>;
    getOrderByDate(dayDate: string): Observable<IOrderDailyLunch>;
    placeOrder(order: any): Observable<any>;
    removeOrder(orderId: any): Observable<any>;
    updateOrder(orderId: string, order: any): Observable<any>;
}
