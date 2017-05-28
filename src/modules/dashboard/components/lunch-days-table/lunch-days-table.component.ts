import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ILunchDay } from '../../models/lunch/lunch-day.interface';
import { lunchDayListResponse } from '../../../../mocks/dashboard/lunchDayResponse';

@Component({
    selector: 'days-table',
    styles  : [
        require('./lunch-days-table.component.scss')
    ],
    template: require('./lunch-days-table.component.html')
})

export class DaysTableComponent {
    @Input() daysList: ILunchDay[] = lunchDayListResponse;
}
