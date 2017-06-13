import {
    Component,
    EventEmitter,
    Input, OnChanges, OnInit,
    Output
} from '@angular/core';
import {
    ILunchDishGroup,
    OrderDishGroupModel,
    OrderDishModel
} from '../../models/index';
import {} from '../../models/lunch/lunch-dish.interface';

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
        this.order = this.order || {dishList: []} as OrderDishGroupModel;
        this.orderDishGroup = new OrderDishGroupModel(new Date(), this.order.dishList);
        this.orderDishGroup.name = this.dishGroup.name;
    }

    ngOnChanges(): void {
        //console.log('LunchDishGroupComponent changes', this.order);
    }

    private addDishIntoGroupOrder(orderDish: OrderDishModel): void {
        this.orderDishGroup.dishList.push(orderDish);
    }

    private removeDishFromGroupOrder(orderDish: OrderDishModel): void {
        this.orderDishGroup.dishList = this.orderDishGroup.dishList
            .filter((dish: OrderDishModel) => dish.dish.name !== orderDish.dish.name);
    }

    private placeOrderDishGroup(): void {
        this.orderDishGroupPlaced.emit(this.orderDishGroup);
    }

    private isDemandFulfilled(): boolean {
        return Boolean(!this.orderDishGroup.dishList.length);
    }

    public showGroupDishes(): void {
        this._isGroupDishesVisible = !this._isGroupDishesVisible;
    }

    public getDishOrder(orderDishName: string): OrderDishModel | null {
        return this.order && this.order.dishList ?
            this.order.dishList.filter((orderDish: OrderDishModel) => orderDish.dish.name === orderDishName)[0] || null :
            null;
    }

    public hasGroupDishesOrder(): boolean {
        return Boolean(this.order && this.order.dishList);
    }

    public onOrderDishPlaced(orderDish: OrderDishModel): void {
        if (this.isDemandFulfilled()) {
            this.addDishIntoGroupOrder(orderDish);
            this.placeOrderDishGroup();
        }
    }

    public onOrderDishRemoved(orderDish: OrderDishModel): void {
        this.removeDishFromGroupOrder(orderDish);
        this.placeOrderDishGroup();
    }
}
