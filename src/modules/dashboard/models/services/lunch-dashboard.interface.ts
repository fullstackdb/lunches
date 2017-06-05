import { Observable } from 'rxjs/Observable';
import { OrderLunchModel } from '../order/index';

export interface ILunchDashboardService {
    getOrderList(): Observable<OrderLunchModel[]>;
    getOrderByDate(date: Date): Observable<OrderLunchModel[]>;
    createOrder(order: any): Observable<any>;
    removeOrder(orderId: any): Observable<any>;
    updateOrder(orderId: string, order: any): Observable<any>;
}
