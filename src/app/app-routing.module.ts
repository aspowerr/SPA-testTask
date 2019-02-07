import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'
  },
  {
    path: 'shop', loadChildren: './shops/shops.module#ShopsModule'
  },
  {
    path: 'shop/:shop/product', loadChildren: './products/products.module#ProductsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
