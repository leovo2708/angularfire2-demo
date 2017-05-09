import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductListRouteData } from './product-list-route-data';
import { ProductItemComponent } from './product-item.component';
import { CreateProductComponent } from './create-product.component';

const listRouteData: ProductListRouteData = {
    isArchived: false
};
const archivedRouteData: ProductListRouteData = {
    isArchived: true
};
const routes: Routes = [
    { path: 'product/list', component: ProductListComponent, data: listRouteData },
    { path: 'product/archived', component: ProductListComponent, data: archivedRouteData },
    { path: 'product/new', component: CreateProductComponent },
    { path: 'product/:id', component: ProductItemComponent }
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
