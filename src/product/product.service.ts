import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from './product';
import { FirebaseProduct } from './firebase-product';

@Injectable()
export class ProductService {
    private path = '/products';
    products: FirebaseListObservable<FirebaseProduct[]>;
    mainProducts: FirebaseListObservable<FirebaseProduct[]>;
    archivedProducts: FirebaseListObservable<FirebaseProduct[]>;

    constructor(private db: AngularFireDatabase) {
        this.products = db.list(this.path);
        this.mainProducts = db.list(this.path, {
            query: {
                orderByChild: 'deleted',
                equalTo: false
            }
        });
        this.archivedProducts = db.list(this.path, {
            query: {
                orderByChild: 'deleted',
                equalTo: true
            }
        });
    }

    getProduct(key: string): FirebaseObjectObservable<FirebaseProduct> {
        return this.db.object(`${this.path}/${key}`);
    }

    createProduct(name: string, price: number, deleted = false): firebase.Promise<any> {
        return this.products.push(new Product(name, price, deleted));
    }

    archiveProduct(product: FirebaseProduct): firebase.Promise<any> {
        product.deleted = true;
        return this.products.update(product.$key, product);
    }

    updateProduct(product: FirebaseProduct, changes: any): firebase.Promise<any> {
        return this.products.update(product.$key, changes);
    }

    removeProduct(product: FirebaseProduct): firebase.Promise<any> {
        return this.products.remove(product.$key);
    }
}
