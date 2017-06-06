import {
    Component,
    EventEmitter,
    Input, OnChanges, OnInit,
    Output
} from '@angular/core';
import {
    ILunchDishGroup,
    OrderDishGroupModel,
    OrderDishModel,
    OrderLunchModel,
    ILunchDish
} from '../../models/index';
import {  } from '../../models/lunch/lunch-dish.interface';

@Component({
    selector: 'lunch-dish-group',
    styles  : [
        require('./lunch-dish-group.component.scss')
    ],
    template: require('./lunch-dish-group.component.html')
})

export class LunchDishGroupComponent implements OnInit, OnChanges {
    @Input() date: Date;
    @Input() dishGroup: ILunchDishGroup;
    @Input() order: OrderDishGroupModel;

    @Output() orderDishGroupPlaced: EventEmitter<any> = new EventEmitter<any>();

    private _isGroupDishesVisible: boolean = false;
    private orderDishGroup: OrderDishGroupModel;

    get isGroupDishesVisible(): boolean {
        return this._isGroupDishesVisible;
    }

    ngOnInit(): void {
        this.orderDishGroup = new OrderDishGroupModel(new Date(), this.order.dishList);
        this.orderDishGroup.name = this.dishGroup.name;
    }

    ngOnChanges(): void {
        console.log('LunchDishGroupComponent', this.order);
    }

    private addDishIntoGroupOrder(orderDish: OrderDishModel): void {
        this.orderDishGroup.dishList.push(orderDish);
    }

    private placeOrderDishGroup(): void {
        this.orderDishGroupPlaced.emit(this.orderDishGroup);
    }

    public showGroupDishes(): void {
        this._isGroupDishesVisible = !this._isGroupDishesVisible;
    }

    public onOrderDishPlaced(orderDish: OrderDishModel): void {
        this.addDishIntoGroupOrder(orderDish);
        this.placeOrderDishGroup();
    }
}
