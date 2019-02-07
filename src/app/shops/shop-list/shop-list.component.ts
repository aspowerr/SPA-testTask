import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/core/models/shop.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops: Shop[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.shops = this.dataService.getShops();
  }

}
