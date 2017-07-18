import {
    Component,
    Input,
    OnChanges
} from '@angular/core';
import { ILunchDay } from '../../../models/lunch/lunch-day.interface';
import { IOrderDailyLunch, OrderDishGroupModel } from "src/modules/dashboard/models";

@Component({
    selector: 'lunch-day',
    styles  : [
        require('./lunch-day.component.scss')
    ],
    template: require('./lunch-day.component.html')
})

export class LunchDayComponent implements OnChanges {
    @Input() day: ILunchDay;
    @Input() currentOrder: IOrderDailyLunch;
    @Input() requestedDishes: OrderDishGroupModel[];

    ngOnChanges(changes: any): void {
        // console.log('ngOnChanges', this.requestedDishes);
    }
}
