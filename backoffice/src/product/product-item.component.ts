import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseProduct } from './firebase-product';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[app-product-item]',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
    @Input() product: FirebaseProduct;
    @Output() remove = new EventEmitter(false);
    @Output() edit = new EventEmitter(false);
}
