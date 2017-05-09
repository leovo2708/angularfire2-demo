import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
    productName = '';
    productPrice = 0;

    constructor(
        private router: Router,
        private service: ProductService
    ) { }

    create() {
        this.service.createProduct(this.productName, this.productPrice).then(() => {
            this.router.navigate(['/product/list']);
        });
    }
}
