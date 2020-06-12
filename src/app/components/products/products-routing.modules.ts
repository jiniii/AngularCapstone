import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { UpdateComponent } from '../update/update.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';


const empRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'display', component: ProductDetailsComponent },
  { path: ':id', component: UpdateComponent },
]; 

@NgModule({
  imports: [
    RouterModule.forChild(empRoutes)
  ],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }