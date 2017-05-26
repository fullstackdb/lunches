import { Observable } from 'rxjs/Observable';

export interface ILunchMenuService {
    getMenu(): Observable<any>;
    placeMenu(order: any): firebase.Promise<any>;
    placeDishesFroup(dishesGroup: any): firebase.Promise<any>;
    placeDish(dish: any): firebase.Promise<any>;
    clearMenu(menuId: string): firebase.Promise<any>;
    clearDishesGroup(dishesGroupId: string): firebase.Promise<any>;
    removeDishesGroup(dishesGroupId: string): firebase.Promise<any>;
    removeDish(dishesGroupId: string, dishId: string): firebase.Promise<any>;
}
