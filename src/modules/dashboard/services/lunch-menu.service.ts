import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { UserService } from '../../auth/index';
import { ApiLunchMenuService } from './api-lunch-menu.service';
import {
    ILunchMenuService,
    ILunchDailyMenu,
    ILunchWeekMenu
} from '../models/index';
import { LunchDaysService } from './lunch-days.service';

@Injectable()
export class LunchMenuService implements ILunchMenuService {
    private userID: string;
    private url: string;
    private lunchMenuSource = new ReplaySubject<ILunchWeekMenu>(1);
    public LunchMenu$ = this.lunchMenuSource.asObservable();

    constructor(private apiService: ApiLunchMenuService,
                private userService: UserService,
                private lunchDaysService: LunchDaysService) {
        this.userID = userService.user.tokenId;
    }

    public getMenu(): Observable<ILunchWeekMenu> {
        return this.apiService.getMenu(this.userID)
            .map((lunchMenu: ILunchWeekMenu) => {
                this.lunchDaysService.setLunchDays(lunchMenu);
                this.lunchMenuSource.next(lunchMenu);
                return lunchMenu;
            });
    }

    public getDailyMenu(dayFriendlyName: string, lunchMenu: ILunchWeekMenu): ILunchDailyMenu {
        return lunchMenu.orderList.filter((lunchDay: ILunchDailyMenu) => {
            return lunchDay.dayFriendlyName.toLowerCase() === dayFriendlyName.toLowerCase();
        })[0];
    }

    public placeMenu(menu: ILunchWeekMenu): Observable<any> {
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
