import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import {
    LunchOrderService
} from '../../../services/index';
import { Utils } from '../../../services/utils';

@Component({
    selector : 'current-user-order',
    styles   : [
        require('./current-user-order.component.scss')
    ],
    template : require('./current-user-order.component.html'),
    providers: [
        Utils
    ]
})
export class CurrentUserOrderComponent implements OnInit, OnDestroy {

    constructor(private lunchOrderService: LunchOrderService) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
