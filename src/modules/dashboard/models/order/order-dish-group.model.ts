export class OrderDishGroupModel {
    name: string;
    dish: {
        name: string;
    };

    constructor(name: string) {
        this.name = name;
    }
}
