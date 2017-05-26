import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'lunch-day',
    styles  : [
        require('./lunch-day.component.scss')
    ],
    template: require('./lunch-day.component.html')
})

export class LunchDayComponent {
    @Input() order: any;
    @Input() day: any[];
    @Output() orderCreated: EventEmitter<any> = new EventEmitter();
    @Output() orderUpdated: EventEmitter<any> = new EventEmitter();

    createOrder(): void {
        this.orderCreated.emit(this.order);
    }

    updateOrder(): void {
        this.orderUpdated.emit(this.order);
    }
}
