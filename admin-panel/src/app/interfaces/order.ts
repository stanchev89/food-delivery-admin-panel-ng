import {ICartItem} from './cartItem';
import {IUser} from "./user";
import {IAddress} from "./address";

export interface IOrder {
    user: IUser | string;
    cart: ICartItem[];
    totalPrice: number;
    payment: string;
    successful_payment: boolean | undefined | null;
    description: string;
    address: IAddress;
    delivery: number;
}
