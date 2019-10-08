import { Component, OnInit } from '@angular/core';
import { Products } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Products>;

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
