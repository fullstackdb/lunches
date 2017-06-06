import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILunchMenuService } from '../models/services/lunch-menu.interface';

import { UserService } from '../../auth/index';
import {
    ILunchMenu,
    ILunchDishGroup,
    ILunchDish
} from '../models/index';
import { ApiLunchMenuService } from './api-lunch-menu.service';

@Injectable()
export class LunchMenuService implements ILunchMenuService {
    private userID: string;
    private url: string;

    constructor(private apiService: ApiLunchMenuService, userService: UserService) {
        this.userID = userService.user.id;
        this.url = `menus`;
    }

    public getMenu(): Observable<ILunchMenu> {
        return this.apiService.getMenu(this.url);
    }

    public placeMenu(menu: ILunchMenu): Observable<any> {
        return this.apiService.placeMenu(this.url, menu);
    }

    //public placeDishesGroup(dishesGroup: ILunchDishGroup): Observable<any> {
    //    return this.apiService.create<any>(this.url, dishesGroup);
    //}
    //
    //public placeDish(dish: ILunchDish): Observable<any> {
    //    return this.apiService.create<any>(this.url, dish);
    //}
    //
    //public clearMenu(menuId: string): Observable<any> {
    //    return this.apiService.update<any>(this.url, menuId, {});
    //}
    //
    //public clearDishesGroup(dishesGroupId: string): Observable<any> {
    //    return this.apiService.update<any>(this.url, dishesGroupId, {});
    //}
    //
    //public removeDishesGroup(dishesGroupId: string): Observable<any> {
    //    return this.apiService.delete(this.url, dishesGroupId);
    //}
    //
    //public removeDish(dishesGroupId: string, dishId: string): Observable<any> {
    //    return this.apiService.delete(this.url, dishesGroupId);
    //}
}
