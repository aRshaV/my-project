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
        id: 1,
        name: 'iPhone 11',
        quantity: 1,
        price: '850',
        category: { name: 'Smartphone', id: 1 } as Category
      } as Products,
      {
        id: 2,
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

  getProductById(id: number): Products {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Products): void {
    product.id =
      this.products.length > 0
        ? this.products[this.products.length - 1].id + 1
        : 1;
    this.products.push(product);
  }

  updateProduct(product: Products): void {
    let productFound = this.getProductById(product.id);
    productFound = product;
  }

  getCategories(): Array<Category> {
    return [
      { name: 'Smartphone', id: 1 } as Category,
      { name: 'Tablet', id: 2 } as Category
    ];
  }

  delete(id: number): void {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
  }
}
