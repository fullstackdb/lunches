import { Injectable } from '@angular/core';
@Injectable()
export class Utils {
    compareObjects(a: any, b: any): boolean {
        const aType = Object.prototype.toString.call(a);
        const bType = Object.prototype.toString.call(b);

        if (aType !== bType) {
            return false;
        }

        if (aType === '[object Array]') {
            return a.every((aItem: any, index: number) => this.compareObjects(aItem, b[index]));
        }

        if (aType === '[object Object]') {
            return Object.keys(a).every((aProp: string) =>
                this.compareObjects(a[aProp], b[aProp])
            );
        }

        return a === b;
    }

    compareItemsByType(a: any, b: any): boolean {
        switch (typeof(a)) {
            case 'string':
                return a === b;
            case 'number':
                return a === b;
            case 'boolean':
                return a === b;
            case 'undefined':
                return a === b;
            case 'object':
                return this.compareObjects(a, b);
        }
    }

    compareItems(a: any, b: any): boolean {
        if (typeof(a) === typeof(b)) {
            this.compareItemsByType(a, b);
        } else {
            return false;
        }
    }

    public isArrayContain(array: any[], item: any): boolean {
        return array.some((arrayItem: any) => this.compareItems(arrayItem, item));
    }
}
