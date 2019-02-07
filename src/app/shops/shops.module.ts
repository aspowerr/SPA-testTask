import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { UpdateShopComponent } from './update-shop/update-shop.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ShopManagementComponent } from './shop-management/shop-management.component';
import { ShopsRoutingModule } from './shops-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopCardComponent,
    ShopListComponent,
    UpdateShopComponent,
    AddShopComponent,
    ShopManagementComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    FormsModule
  ],
  exports: [
    ShopManagementComponent
  ]
})
export class ShopsModule { }
