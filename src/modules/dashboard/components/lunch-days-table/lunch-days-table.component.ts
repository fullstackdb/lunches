import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'days-table',
    styles  : [
        require('./lunch-days-table.component.scss')
    ],
    template: require('./lunch-days-table.component.html')
})

export class DaysTableComponent {
    @Input() orderList: any;
    @Input() daysList: any[];
    @Output() orderCreated: EventEmitter<any> = new EventEmitter();
    @Output() orderUpdated: EventEmitter<any> = new EventEmitter();

    createOrder(order: any): void {
        this.orderCreated.emit(order);
    }

    updateOrder(date: any, order: any): void {
        this.orderUpdated.emit(order);
    }
}
