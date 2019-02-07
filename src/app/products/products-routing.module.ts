import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsManagementComponent } from './products-management/products-management.component';

const routes: Routes = [
  {
    path: '', component: ProductsManagementComponent, pathMatch: 'full'
  },
  {
    path: ':product/update', component: UpdateProductComponent
  },
  {
    path: 'add', component: AddProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ProductsRoutingModule { }
