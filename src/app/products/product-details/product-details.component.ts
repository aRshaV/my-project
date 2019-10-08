import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category.interface';
import { Products } from '../products.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  addProduct(): void {
    const product = {
      name: 'MacBook Air',
      quantity: 10,
      price: '1100',
      category: { name: 'Notebook', id: 3 } as Category
    } as Products;

    this.productsService.addProduct(product);
  }

}
