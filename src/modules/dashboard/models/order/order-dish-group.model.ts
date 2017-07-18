export class OrderDishGroupModel {
    name: string;
    date: string;
    dish: {
        name: string;
    };

    constructor(name: string, date?: string) {
        this.name = name;
        this.date = date || '';
    }
}
