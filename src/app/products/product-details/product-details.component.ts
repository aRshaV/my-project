import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Category } from '../category.interface';
import { Products } from '../products.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('form', { static: false }) form: NgForm;

  product: Products;
  categories: Array<Category>;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.product = {} as Products;
    this.categories = this.productsService.getCategories();
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.product = this.productsService.getProductById(id);
      if (!!this.product.category) {
        this.product.category = this.categories.find(
          category => category.id === this.product.category.id
        );
      }
    }
  }

  addProduct(): void {
    if (this.form.valid) {
      if (this.product.id > 0) {
        this.productsService.updateProduct(this.product);
      } else {
        this.productsService.addProduct(this.product);
      }
      this.router.navigateByUrl('products');
    }
  }
}
