import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserInfo } from 'firebase';

import { UserService } from '../../../services/user.service';

@Component({
    selector: 'user-widget',
    styles  : [require('./user-widget.component.scss')],
    template: require('./user-widget.component.html')
})
export class UserWidgetComponent implements OnInit, OnDestroy {
    private user: UserInfo;
    private userSubscription: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userSubscription = this.userService.ActiveUser$.subscribe(
            (user: UserInfo) => {
                this.user = user;
            },
            (err: any) => {
                console.log('UserWidgetComponent', err);
            }
        );
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}
