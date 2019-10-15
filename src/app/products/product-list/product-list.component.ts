import { Component, OnInit } from '@angular/core';
import { Products } from '../products.interface';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<Products>>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  delete(id: number): void {
    this.productsService.delete(id);
    this.products = this.productsService.getProducts();
  }
}
