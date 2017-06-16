import {
    Component, OnDestroy,
    OnInit
} from '@angular/core';
import {
    LunchOrderService
} from '../../../services/index';
import { Utils } from '../../../services/utils';

@Component({
    selector : 'main-dashboard',
    styles   : [
        require('./main-dashboard.component.scss')
    ],
    template : require('./main-dashboard.component.html'),
    providers: [
        Utils
    ]
})
export class MainDashboardComponent {
}
