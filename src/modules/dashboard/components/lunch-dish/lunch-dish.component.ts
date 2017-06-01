import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import {
    ILunchDish,
    OrderDishModel
} from '../../models/index';

@Component({
    selector: 'lunch-dish',
    styles  : [
        require('./lunch-dish.component.scss')
    ],
    template: require('./lunch-dish.component.html')
})

export class LunchDishComponent {
    @Input() date: Date;
    @Input() dish: ILunchDish;
    @Output() orderDishPlaced: EventEmitter<any> = new EventEmitter<any>();

    private orderDish: OrderDishModel;

    public placeOrderDish(): void {
        this.orderDish = new OrderDishModel(this.date, this.dish);
        this.orderDishPlaced.emit(this.orderDish);
        this.dish.isActive = true;
    }
}
