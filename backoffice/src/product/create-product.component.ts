import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './product.service';
import { FirebaseProduct } from './firebase-product';
import { Product } from './product';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
    editingProduct: FirebaseProduct;
    productName = '';
    productPrice = 0;
    productDeleted = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ProductService
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                const productKey = params['id'];
                if (productKey) {
                    return this.service.getProduct(productKey);
                } else {
                    return Observable.of();
                }
            })
            .subscribe((product: FirebaseProduct) => {
                this.editingProduct = product;
                this.productName = product.name;
                this.productPrice = product.price;
                this.productDeleted = product.deleted;
            });
    }

    get isCreate(): boolean {
        return this.editingProduct === undefined;
    }

    get headerTitle(): string {
        return this.isCreate ? 'Create product' : 'Update product';
    }

    create() {
        this.service.createProduct(this.productName, this.productPrice).then(() => {
            this.router.navigate(['/product/list']);
        });
    }

    update() {
        const product = new Product(this.productName, this.productPrice, this.productDeleted);
        this.service.updateProduct(this.editingProduct, product).then(() => {
            const path = this.productDeleted ? '/product/archived' : '/product/list';
            this.router.navigate([path]);
        });
    }
}
