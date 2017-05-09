import { FirebaseProduct } from './firebase-product';

export class Product implements FirebaseProduct {
    deleted = false;
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
