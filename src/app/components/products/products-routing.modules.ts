import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../helpers/auth.guard';

import { ProductsComponent } from './products.component';
import { UpdateComponent } from '../update/update.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteComponent } from '../delete/delete.component';
import { CartComponent } from '../cart/cart.component';
import { CanDeactivateFormGuard } from 'src/app/helpers/canDeactivate';

const empRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard], canDeactivate:[CanDeactivateFormGuard] },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: 'delete/:id', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(empRoutes)
  ],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }