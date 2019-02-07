import { Product } from './product.model';

export interface Shop {
    id: number;
    name: string;
    street: string;
    house: number;
    startWork: string;
    endWork: string;
    products: Product[];
  }
