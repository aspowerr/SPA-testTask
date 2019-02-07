import { Injectable } from '@angular/core';
import { Shop } from '../models/shop.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private shops: Shop[] = [];
  private currentId = 0;
  private currentIdProduct = 0;

  addShop(shop: Shop): void {
    shop.id = this.currentId++;
    this.shops.push(shop);
  }

  getShops(): Shop[] {
    return this.shops;
  }

  removeShop(id: number): void {
    this.shops.splice(this.shops.findIndex(x => x.id === id), 1);
  }

  editShop(model: Shop) {
    const shop = this.shops.find(x => x.id === model.id);
    shop.name = model.name;
    shop.street = model.street;
    shop.house = model.house;
    shop.startWork = model.startWork;
    shop.endWork = model.endWork;
    shop.products = model.products;
  }

  addProductToShop(product: Product, id: number) {
    product.id = this.currentIdProduct++;
    const shop = this.shops.find(x => x.id === id);
    shop.products.push(product);
  }

  removeProductFromShop(idProduct: number, idShop: number) {
    const shop = this.shops.find(x => x.id === idShop);
    shop.products.splice(shop.products.findIndex(x => x.id === idProduct), 1);
  }

  updateProduct(model: Product, id: number) {
    const shop = this.shops.find(x => x.id === id);
    const product = shop.products.find(x => x.id === model.id);
    product.name = model.name;
    product.idShop = model.idShop;
    product.description = model.description;
  }

  getProducts(id: number): Product[] {
    return this.shops.find(x => x.id === id).products;
  }

  getShopById(id: number): Shop {
    return { ...this.shops.find(x => x.id === id) };
  }

  getProduct(shopId: number, productId: number): Product {
    const shop = this.shops.find(x => x.id === shopId);
    return { ...shop.products.find(x => x.id === productId) };
  }
}
