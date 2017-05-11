import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product-item.component';
import { CreateProductComponent } from './create-product.component';

const routes: Routes = [
    { path: 'product/list', component: ProductListComponent, data: { isArchived: false } },
    { path: 'product/archived', component: ProductListComponent, data: { isArchived: true } },
    { path: 'product/new', component: CreateProductComponent },
    { path: 'product/:id', component: CreateProductComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
