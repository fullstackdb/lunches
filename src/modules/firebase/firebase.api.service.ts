import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FirebaseApiService {

    constructor(private af: AngularFire,
                private db: AngularFireDatabase) {
    }

    private convertToObservable<T>(p: Promise<T> | firebase.database.ThenableReference): Observable<T> {
        return Observable.fromPromise(p);
    }

    public get<T>(url: string): Observable<T[]> {
        return this.db.list(url);
    }

    public getByQuery<T>(url: string, query: any): Observable<T[]> {
        return this.af.database.list(url, query);
    }

    public create<T>(url: string, data: T): Observable<T> {
        return this.convertToObservable(this.db.list(url).push(data));
    }

    public update<T>(url: string, id: string, data: T): Observable<any> {
        return this.convertToObservable(this.db.list(url).update(id, data) as Promise<any>);
    }

    public delete(url: string, id: string): Observable<any> {
        return this.convertToObservable(this.db.list(url).remove(id) as Promise<any>);
    }
}
