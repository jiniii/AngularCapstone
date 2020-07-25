import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../helpers/auth.guard';
import { AddProductComponent } from '../add-product/add-product.component';
import { CartComponent } from '../cart/cart.component';
import { DeleteComponent } from '../delete/delete.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { UpdateComponent } from '../update/update.component';
import { ProductsComponent } from './products.component';


const empRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard] },
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