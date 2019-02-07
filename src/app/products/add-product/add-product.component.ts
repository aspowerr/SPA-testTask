import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  shopId: number;
  model: Product = {} as Product;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shopId = +params.get('shop');
    });
  }

  saveProduct(): void {
    this.dataService.addProductToShop(this.model, this.shopId);
    this.router.navigate([`/shop/${this.shopId}/product`]);
  }

}
