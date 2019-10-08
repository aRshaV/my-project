import { Injectable } from '@angular/core';
import { Products } from './products.interface';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Array<Products>;

  constructor() {
    this.products = [
      {
        name: 'iPhone 11',
        quantity: 1,
        price: '850',
        category: { name: 'Smartphone', id: 1 } as Category
      } as Products,
      {
        name: 'iPad',
        quantity: 10,
        price: '700',
        category: { name: 'Tablet', id: 2 } as Category
      } as Products
    ];
  }

  getProducts(): Array<Products> {
    return this.products;
  }

  addProduct(products: Products): void {
    this.products.push(products);
  }
}
