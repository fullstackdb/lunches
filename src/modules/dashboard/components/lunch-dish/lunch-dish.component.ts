import {
    Component,
    EventEmitter,
    Input, OnInit,
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

export class LunchDishComponent implements OnInit {
    @Input() date: Date;
    @Input() dish: ILunchDish;
    @Input() dishOrder: OrderDishModel | null;
    @Output() orderDishPlaced: EventEmitter<OrderDishModel> = new EventEmitter<OrderDishModel>();
    @Output() orderDishRemoved: EventEmitter<OrderDishModel> = new EventEmitter<OrderDishModel>();

    private orderDish: OrderDishModel;

    public ngOnInit(): void {
        console.log(this.dishOrder, this.isActive());
    }

    public addOrderDish(): void {
        this.dish.isActive = true;
        this.createOrderDish();
        this.orderDishPlaced.emit(this.orderDish);
    }

    public removeOrderDish(): void {
        this.dish.isActive = false;
        this.createOrderDish();
        this.orderDishRemoved.emit(this.orderDish);
    }

    public isActive(): boolean {
        return Boolean(this.dishOrder);
    }

    private createOrderDish(): void {
        this.orderDish = this.dishOrder || new OrderDishModel(this.date, this.dish);
        this.orderDish.dish.isActive = this.dish.isActive;
    }

}
