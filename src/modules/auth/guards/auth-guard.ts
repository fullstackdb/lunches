import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) {
    }

    canActivate(): Observable<boolean> {
        if (!Boolean(this.userService.user)) {
            this.router.navigate(['login']);
        }
        return Observable.of(Boolean(this.userService.user));
    }
}
