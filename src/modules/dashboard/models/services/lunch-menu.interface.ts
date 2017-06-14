import { Observable } from 'rxjs/Observable';
import {
    ILunchDailyMenu,
    ILunchDishGroup,
    ILunchWeekMenu,
    ILunchDish
} from '../lunch/index';

export interface ILunchMenuService {
    getMenu(): Observable<ILunchWeekMenu>;
    placeMenu(menu: ILunchWeekMenu): Observable<any>;
    placeDishesGroup?(dishesGroup: ILunchDishGroup): Observable<any>;
    placeDish?(dish: ILunchDish): Observable<any>;
    clearMenu?(menuId: string): Observable<any>;
    clearDishesGroup?(dishesGroupId: string): Observable<any>;
    removeDishesGroup?(dishesGroupId: string): Observable<any>;
    removeDish?(dishesGroupId: string, dishId: string): Observable<any>;
}
