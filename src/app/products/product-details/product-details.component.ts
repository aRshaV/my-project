import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-validator.directive';
import { Category } from '../category.interface';
import { Products } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  form: FormGroup;
  categories: Array<Category>;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.categories = this.productsService.getCategories();

    this.form = this.fb.group({
      id: [0],
      name: [null, [Validators.required, forbiddenNameValidator(/mirco./i)]],
      quantity: [null, Validators.required],
      price: [null, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
      category: [null]
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      const product = this.productsService.getProductById(id);
      this.form.patchValue(product);
      if (!!product.category) {
        this.form
          .get('category')
          .setValue(
            this.categories.find(
              category => category.id === product.category.id
            )
          );
        this.form.get('category').setValidators(Validators.required);
      }
    }
  }

  addProduct(): void {
    if (this.form.valid) {
      if (this.form.get('id').value > 0) {
        this.productsService.updateProduct(this.form.value);
      } else {
        this.productsService.addProduct(this.form.value);
      }
      this.router.navigateByUrl('products');
    }
  }
}
