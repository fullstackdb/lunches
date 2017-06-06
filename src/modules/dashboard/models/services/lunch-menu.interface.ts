import { Observable } from 'rxjs/Observable';
import {
    ILunchMenu,
    ILunchDishGroup,
    ILunchDish
} from '../lunch/index';

export interface ILunchMenuService {
    getMenu(): Observable<ILunchMenu>;
    placeMenu(menu: ILunchMenu): Observable<any>;
    placeDishesGroup?(dishesGroup: ILunchDishGroup): Observable<any>;
    placeDish?(dish: ILunchDish): Observable<any>;
    clearMenu?(menuId: string): Observable<any>;
    clearDishesGroup?(dishesGroupId: string): Observable<any>;
    removeDishesGroup?(dishesGroupId: string): Observable<any>;
    removeDish?(dishesGroupId: string, dishId: string): Observable<any>;
}
