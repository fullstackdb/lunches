import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth';

@Injectable()
export class LunchMenuService {
    private menu$: FirebaseListObservable<any[]>;

    constructor(private auth: AuthService,
                private db: AngularFireDatabase) {
        const path = `/menus/${auth.id}`;
        this.menu$ = db.list(path);
    }

    public getMenu(): Observable<any> {
        return this.menu$;
    }

    public placeMenu(order: any): firebase.Promise<any> {
        return this.menu$.push(order);
    }

    public placeDishesFroup(dishesGroup: any): firebase.Promise<any> {
        return this.menu$.push(dishesGroup);
    }

    public placeDish(dish: any): firebase.Promise<any> {
        return this.menu$.push(dish);
    }

    public clearMenu(menuId: string): firebase.Promise<any> {
        return this.menu$.update(menuId, {});
    }

    public clearDishesGroup(dishesGroupId: string): firebase.Promise<any> {
        return this.updateMenu(dishesGroupId, {});
    }

    public removeDishesGroup(dishesGroupId: string): firebase.Promise<any> {
        return this.menu$.remove(dishesGroupId);
    }

    public removeDish(dishesGroupId: string, dishId: string): firebase.Promise<any> {
        return this.menu$.remove(dishesGroupId);
    }

    private updateMenu(dishesGroupId: string, dish: any): firebase.Promise<any> {
        return this.menu$.update(dishesGroupId, dish);
    }
}
