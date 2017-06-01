import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class UnAuthGuard implements CanActivate {

    constructor(private router: Router,
                private userService: UserService) {
    }

    canActivate(): Observable<boolean> {
        console.log('UnAuthGuard', Boolean(this.userService.user));
        if (Boolean(this.userService.user)) {
            this.router.navigate(['dashboard']);
        }
        return Observable.of(!Boolean(this.userService.user));
    }
}
