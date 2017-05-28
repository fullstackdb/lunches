import {
    Component,
    Input
} from '@angular/core';
import { ILunchDay } from '../../models/lunch/lunch-day.interface';

@Component({
    selector: 'lunch-day',
    styles  : [
        require('./lunch-day.component.scss')
    ],
    template: require('./lunch-day.component.html')
})

export class LunchDayComponent {
    @Input() day: ILunchDay;
}
