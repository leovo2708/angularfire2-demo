import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProduct } from './firebase-product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    headerTitle: string;
    products: FirebaseListObservable<FirebaseProduct[]>;
    isArchived = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ProductService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.isArchived = data.isArchived;
            this.products = this.isArchived ? this.service.archivedProducts : this.service.mainProducts;
            this.headerTitle = this.isArchived ? 'Archived List' : 'Product List';
        });
    }

    remove(product: FirebaseProduct) {
        if (this.isArchived) {
            this.service.removeProduct(product);
        } else {
            this.service.archiveProduct(product);
        }
    }

    edit(product: FirebaseProduct) {
        this.router.navigate(['/product', product.$key]);
    }
}
