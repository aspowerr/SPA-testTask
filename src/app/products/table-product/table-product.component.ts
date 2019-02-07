import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  products: Product[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const shopId = +params.get('shop');
      this.products = this.dataService.getProducts(shopId);
    });
  }

}
