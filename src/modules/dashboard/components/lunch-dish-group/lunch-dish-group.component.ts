import {
    Component,
    EventEmitter,
    Input, OnInit,
    Output
} from '@angular/core';
import {
    ILunchDishGroup,
    OrderDishGroupModel,
    OrderDishModel
} from '../../models/index';

@Component({
    selector: 'lunch-dish-group',
    styles  : [
        require('./lunch-dish-group.component.scss')
    ],
    template: require('./lunch-dish-group.component.html')
})

export class LunchDishGroupComponent implements OnInit {
    @Input() date: Date;
    @Input() name: string;
    @Input() dishGroup: ILunchDishGroup;
    @Output() orderDishGroupPlaced: EventEmitter<any> = new EventEmitter<any>();

    private _isGroupDishesVisible: boolean = false;
    private orderDishGroup: OrderDishGroupModel;

    get isGroupDishesVisible(): boolean {
        return this._isGroupDishesVisible;
    }

    ngOnInit(): void {
        this.orderDishGroup = new OrderDishGroupModel();
        this.orderDishGroup.name = 'first';
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
