import { ILunchDailyMenu } from '../../modules/dashboard/models/lunch/lunch-menu.interface';
import { ILunchDishGroup } from '../../modules/dashboard/models/lunch/lunch-dish-group.interface';
import { ILunchDish } from '../../modules/dashboard/models/lunch/lunch-dish.interface';

class LunchDishMock implements ILunchDish {
    isActive: boolean;
    id: string;
    name: string;
    description: string;
    thumbnailURL: string;

    constructor(name: string, id?: number, isActive?: boolean) {
        this.name = name;
        this.id = id.toString();
        this.isActive = isActive;
    }
}

class LunchDishGroupMock implements ILunchDishGroup {
    dishes: ILunchDish[];
    id: string;
    name: string;
    description: string;

    constructor(name: string, id?: number, dishesList?: ILunchDish[]) {
        this.name = name;
        this.id = id.toString();
        this.dishes = dishesList;
    }
}

class LunchMenuMock implements ILunchDailyMenu {
    date: string;
    dayFriendlyName: string;
    dayOfWeek: number;
    dishGroup: ILunchDishGroup[];
    id: string;
    name: string;

    constructor(name: string, id?: number, dishGroupList?: ILunchDishGroup[]) {
        this.name = name;
        this.id = id ? id.toString() : `${name}-1`;
        this.dishGroup = dishGroupList;
    }
}

const lunchDishSoupMock: LunchDishMock[] = ['Soup 1', 'Soup 2', 'Soup 3'].map((soup: string, i: number) => new LunchDishMock(soup, i, false));
const lunchDishSideDish: LunchDishMock[] = ['SideDish 1', 'SideDish 2', 'SideDish 3'].map((soup: string, i: number) => new LunchDishMock(soup, i, false));
const lunchDishMeat: LunchDishMock[] = ['Meat 1', 'Meat 2', 'Meat 3'].map((soup: string, i: number) => new LunchDishMock(soup, i, false));
const lunchDishSalad: LunchDishMock[] = ['Salad 1', 'Salad 2', 'Salad 3'].map((soup: string, i: number) => new LunchDishMock(soup, i, false));
const lunchDishAdditionalMeal: LunchDishMock[] = ['Additional 1', 'Additional 2', 'Additional 3'].map((soup: string, i: number) => new LunchDishMock(soup, i, false));

const SoupMock: LunchDishGroupMock = new LunchDishGroupMock('SoupMock', 1, lunchDishSoupMock);
const SideDish: LunchDishGroupMock = new LunchDishGroupMock('SideDish', 2, lunchDishSideDish);
const Meat: LunchDishGroupMock = new LunchDishGroupMock('Meat', 3, lunchDishMeat);
const Salad: LunchDishGroupMock = new LunchDishGroupMock('Salad', 4, lunchDishSalad);
const AdditionalMeal: LunchDishGroupMock = new LunchDishGroupMock('AdditionalMeal', 5, lunchDishAdditionalMeal);

const dishGroupList = [SoupMock, SideDish, Meat, Salad, AdditionalMeal];

export const lunchMenuMock = (menuName: string) => new LunchMenuMock(menuName, 1, dishGroupList);
