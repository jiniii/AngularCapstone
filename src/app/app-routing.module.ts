import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const accountModule = () => import('./account-modules/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', loadChildren: accountModule },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule),
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
