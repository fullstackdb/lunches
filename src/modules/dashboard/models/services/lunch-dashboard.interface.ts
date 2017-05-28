import { Observable } from 'rxjs/Observable';
import { IOrderLunch } from '../order/index';

export interface ILunchDashboardService {
    getOrderList(): Observable<IOrderLunch[]>;
    getOrderByDate(date: Date): Observable<IOrderLunch[]>;
    createOrder(order: any): Observable<any>;
    removeOrder(orderId: any): Observable<any>;
    updateOrder(orderId: string, order: any): Observable<any>;
}
