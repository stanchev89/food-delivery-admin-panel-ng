import {IOrder} from './order';
import {IDish} from './dish';
import {ICart} from './cart';
import {IAddress} from './address';

export interface IUser {
    _id: string;
    username: string;
    password: string;
    address: IAddress[];
    phone: string;
    email: string;
    cart: ICart;
}
