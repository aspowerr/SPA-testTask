import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  shopId: number;
  productId: number;
  model: Product = {} as Product;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shopId = +params.get('shop');
      this.productId = +params.get('product');
      this.model = this.dataService.getProduct(this.shopId, this.productId);
    });
  }

  saveProduct(): void {
    this.dataService.updateProduct(this.model, this.shopId);
    this.router.navigate([`/shop/${this.shopId}/product`]);
  }

  deleteProduct(): void {
    this.dataService.removeProductFromShop(this.productId, this.shopId);
    this.router.navigate([`/shop/${this.shopId}/product`]);
  }
}
