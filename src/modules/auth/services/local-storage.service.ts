import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {

    get<T>(key: string): Observable<T | null> {
        if (window.localStorage && key) {
            return Observable.of(JSON.parse(window.localStorage.getItem(key)) || null);
        } else {
            throw new Error('cannot work with storage');
        }
    }

    set<T>(key: string, data: T): Observable<T> {
        if (window.localStorage && key) {
            window.localStorage.setItem(key, JSON.stringify(data));
        }
        return this.get<T>(key);
    }

    delete(key: string): void {
        if (window.localStorage && key) {
            window.localStorage.removeItem(key);
        }
    }
}
