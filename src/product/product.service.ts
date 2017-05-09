import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Product } from './product';
import { FirebaseProduct } from './firebase-product';

@Injectable()
export class ProductService {
    products: FirebaseListObservable<FirebaseProduct[]>;
    archivedProducts: FirebaseListObservable<FirebaseProduct[]>;

    constructor(private db: AngularFireDatabase) {
        const path = '/products';
        this.products = db.list(path);
        this.archivedProducts = db.list(path, {
            query: {
                orderByChild: 'deleted',
                equalTo: true
            }
        });
    }

    createProduct(name: string, price: number): firebase.Promise<any> {
        return this.products.push(new Product(name, price));
    }

    archiveProduct(product: FirebaseProduct): firebase.Promise<any> {
        product.deleted = true;
        return this.products.update(product.$key, product);
    }

    updateProduct(product: FirebaseProduct, changes: any): firebase.Promise<any> {
        return this.products.update(product.$key, changes);
    }
}
