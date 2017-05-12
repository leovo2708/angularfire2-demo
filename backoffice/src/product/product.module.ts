import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product-item.component';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product.component';
import { AngularFireModule } from 'angularfire2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFireModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductListComponent,
        ProductItemComponent,
        CreateProductComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule { }
