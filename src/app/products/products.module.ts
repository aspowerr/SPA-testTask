import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TableProductComponent } from './table-product/table-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsManagementComponent } from './products-management/products-management.component';

@NgModule({
  declarations: [UpdateProductComponent, TableProductComponent, AddProductComponent, ProductsManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
