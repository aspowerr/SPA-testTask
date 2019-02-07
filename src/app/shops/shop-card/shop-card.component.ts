import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/core/models/shop.model';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
