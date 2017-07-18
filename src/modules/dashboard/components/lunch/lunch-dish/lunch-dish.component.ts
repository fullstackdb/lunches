import {
    Component,
    EventEmitter,
    Input, OnInit,
    Output
} from '@angular/core';
import {
    ILunchDish,
    OrderDishModel
} from '../../../models/index';

@Component({
    selector: 'lunch-dish',
    styles  : [
        require('./lunch-dish.component.scss')
    ],
    template: require('./lunch-dish.component.html')
})

export class LunchDishComponent implements OnInit {
    @Input() dish: ILunchDish;
    @Input() isDemandFulfilled: boolean;
    @Input() isActive: boolean;
    @Output() orderDishPlaced: EventEmitter<OrderDishModel> = new EventEmitter<OrderDishModel>();
    @Output() orderDishRemoved: EventEmitter<OrderDishModel> = new EventEmitter<OrderDishModel>();

    private orderDish: OrderDishModel;
    private isFrozen: boolean = false;

    public ngOnInit(): void {
        this.orderDish = new OrderDishModel(this.dish.name);
    }

    public addOrderDish(): void {
        this.isFrozen = true;
        this.orderDishPlaced.emit(this.orderDish);
    }

    public removeOrderDish(): void {
        this.isFrozen = false;
        this.orderDishRemoved.emit();
    }
}
