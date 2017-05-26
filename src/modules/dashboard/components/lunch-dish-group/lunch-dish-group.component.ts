import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'lunch-dish-group',
    styles  : [
        require('./lunch-dish-group.component.scss')
    ],
    template: require('./lunch-dish-group.component.html')
})

export class LunchDishGroupComponent {
    @Input() name: string;
    @Input() dishesList: any[];
    @Output() groupOrder: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }
}
