import { ILunchDay } from '../../modules/dashboard/models/lunch/lunch-day.interface';

class LunchDayResponse implements ILunchDay {
    dayFriendlyName: string;
    dayOfWeek: number;
    date: string = `${new Date()}`;

    constructor(name: string, id?: number) {
        this.dayFriendlyName = name;
        this.dayOfWeek = id;
    }
}

export const lunchDayListResponse = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                                    .map((dayName: string, i: number) => new LunchDayResponse(dayName, i));
