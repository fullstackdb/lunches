import { IDiscountInfo } from './discount-info.interface';

export interface IPriceInfo {
    amount: number;
    currency: string;
    discount: IDiscountInfo;
}
