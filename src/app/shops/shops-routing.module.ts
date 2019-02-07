import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopManagementComponent } from './shop-management/shop-management.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { UpdateShopComponent } from './update-shop/update-shop.component';

const routes: Routes = [
    { path: '', component: ShopManagementComponent, pathMatch: 'full' },
    { path: 'add', component: AddShopComponent },
    { path: ':shop/update', component: UpdateShopComponent }
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
export class ShopsRoutingModule { }
