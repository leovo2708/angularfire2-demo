import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProduct } from './firebase-product';
import { ProductListRouteData } from './product-list-route-data';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    headerTitle: string;
    products: FirebaseListObservable<FirebaseProduct[]>;

    constructor(
        private route: ActivatedRoute,
        private service: ProductService
    ) {
        this.route.data.subscribe(data => {
            const routeData = data as ProductListRouteData;
            this.products = routeData.isArchived ? this.service.archivedProducts : this.service.products;
            this.headerTitle = routeData.isArchived ? 'Archived List' : 'Product List';
        });
    }
}
