import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService, AuthService } from '../../../services/index';
import { User } from '../../../models/index';

@Component({
    selector: 'user-widget',
    styles  : [require('./user-widget.component.scss')],
    template: require('./user-widget.component.html')
})
export class UserWidgetComponent implements OnInit, OnDestroy {
    private user: User;
    private userSubscription: Subscription;

    constructor(private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.userSubscription = this.userService.ActiveUser$.subscribe(
            (user: User) => {
                this.user = user;
            },
            (err: any) => {
                console.log('UserWidgetComponent', err);
            }
        );
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    public logout(): void {
        this.authService.signOut();
    }

}
