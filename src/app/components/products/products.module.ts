import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.modules';
import { ProductsComponent } from './products.component';
import { UpdateComponent } from '../update/update.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteComponent } from '../delete/delete.component';
import { MatCardModule } from '@angular/material/card';
import { CartComponent } from '../cart/cart.component';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        MatCardModule,
    ],
    declarations: [
        ProductsComponent,
        ProductItemComponent,
        UpdateComponent,
        AddProductComponent,
        DeleteComponent,
        ProductDetailsComponent,
        CartComponent,
        CartItemComponent
    ]
})
export class ProductsModule { }