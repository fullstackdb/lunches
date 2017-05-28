import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'lunch-dish',
    styles  : [
        require('./lunch-dish.component.scss')
    ],
    template: require('./lunch-dish.component.html')
})

export class LunchDishComponent {
    @Input() dish: any;
    @Output() order: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }
}
