import { FirebaseProduct } from './firebase-product';

export class Product implements FirebaseProduct {
    deleted = false;
    name: string;
    price: number;

    constructor(name: string, price: number, deleted = false) {
        this.name = name;
        this.price = price;
        this.deleted = deleted;
    }
}
