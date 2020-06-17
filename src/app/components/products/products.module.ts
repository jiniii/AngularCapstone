import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.modules';
import { ProductsComponent } from './products.component';
import { UpdateComponent } from '../update/update.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteComponent } from '../delete/delete.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule,
        MatCardModule
    ],
    declarations: [
        ProductsComponent,
        UpdateComponent,
        AddProductComponent,
        DeleteComponent,
        ProductDetailsComponent
    ]
})
export class ProductsModule { }