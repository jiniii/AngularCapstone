import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/filter.pipe';
import { AddProductComponent } from '../add-product/add-product.component';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';
import { CartComponent } from '../cart/cart.component';
import { ChartComponent } from '../chart/chart.component';
import { DeleteComponent } from '../delete/delete.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { UpdateComponent } from '../update/update.component';
import { ProductsRoutingModule } from './products-routing.modules';
import { ProductsComponent } from './products.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        MatCardModule,
        RouterModule,
        NgxPaginationModule,
        ChartsModule
    ],
    declarations: [
        ProductsComponent,
        ProductItemComponent,
        UpdateComponent,
        AddProductComponent,
        DeleteComponent,
        ProductDetailsComponent,
        CartComponent,
        CartItemComponent,
        FilterPipe,
        ChartComponent
    ],
    exports: [
        ReactiveFormsModule,
    ]
})
export class ProductsModule { }