import { Observable } from 'rxjs/Observable';
import { IOrderLunch } from '../order/index';

export interface ILunchDashboardService {
    getOrderList(): Observable<IOrderLunch[]>;
    getOrderByDate(date: Date): Observable<IOrderLunch>;
    createOrder(order: any): firebase.Promise<any>;
    removeOrder(date: Date, orderId: any): firebase.Promise<any>;
    updateOrder(date: Date, order: any): firebase.Promise<any>;
}
