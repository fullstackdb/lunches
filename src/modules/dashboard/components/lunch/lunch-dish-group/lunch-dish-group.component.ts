import {
    Component,
    EventEmitter,
    Input, OnChanges, OnInit,
    Output,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    ILunchDishGroup,
    OrderDishGroupModel,
    OrderDishModel
} from '../../../models/index';
import {} from '../../../models/lunch/lunch-dish.interface';

@Component({
    selector: 'lunch-dish-group',
    styles  : [
        require('./lunch-dish-group.component.scss')
    ],
    template: require('./lunch-dish-group.component.html')
})

export class LunchDishGroupComponent implements OnInit, OnChanges {
    @Input() dishGroup: ILunchDishGroup;
    @Input() order: OrderDishGroupModel;

    @Output() orderDishGroupPlaced: EventEmitter<any> = new EventEmitter<any>();
    @Output() orderDishGroupRemoved: EventEmitter<any> = new EventEmitter<any>();

    private _isGroupDishesVisible: boolean = false;
    private orderDishGroup: OrderDishGroupModel;
    public selectedDish: string;

    get isGroupDishesVisible(): boolean {
        return this._isGroupDishesVisible;
    }

    ngOnInit(): void {
        this.order = this.order || {dish: {}} as OrderDishGroupModel;
        this.orderDishGroup = new OrderDishGroupModel(this.dishGroup.name);
    }

    ngOnChanges(): void {
        //console.log('LunchDishGroupComponent changes', this.order);
    }

    private addDishIntoGroupOrder(orderDish: OrderDishModel): void {
        this.orderDishGroup.dish = orderDish;
    }

    private removeDishFromGroupOrder(): void {
        this.orderDishGroup.dish = null;
    }

    private isDemandFulfilled(): boolean {
        return Boolean(!this.order.dish);
    }

    public hasDishes(): boolean {
        return Boolean(this.dishGroup && this.dishGroup.dishes);
    }

    public cleanSelected(): void {
        this.selectedDish = null;
        this.removeDishFromGroupOrder();
        this.orderDishGroupRemoved.emit(this.orderDishGroup);
    }

    public onDishChanged(dishName: string): void {
        this.addDishIntoGroupOrder(new OrderDishModel(dishName));
        this.orderDishGroupPlaced.emit(this.orderDishGroup);
    }

    public isDishActive(dishName: string): boolean {
        return Boolean(this.order.dish && this.order.dish.name === dishName);
    }

    public showGroupDishes(): void {
        this._isGroupDishesVisible = !this._isGroupDishesVisible;
    }

    public getDishOrder(orderDishName: string): OrderDishModel | null {
        return this.order.dish && this.order.dish.name === orderDishName ? this.order.dish : null;
    }

    public hasGroupDishesOrder(): boolean {
        return Boolean(this.order && this.order.dish);
    }

    public onOrderDishPlaced(orderDish: OrderDishModel): void {
        if (this.isDemandFulfilled()) {
            this.addDishIntoGroupOrder(orderDish);
            this.orderDishGroupPlaced.emit(this.orderDishGroup);
        }
    }

    public onOrderDishRemoved(): void {
        this.removeDishFromGroupOrder();
        this.orderDishGroupRemoved.emit(this.orderDishGroup);
    }
}
