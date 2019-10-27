import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-validator.directive';
import { Category } from '../category.interface';
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
      this.productsService.getProductById(id).subscribe(product => {
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
      });
    }
  }

  addProduct(): void {
    if (this.form.valid) {
      this.productsService.save(this.form.value).subscribe(() => {
        this.router.navigateByUrl('products');
      });
    }
  }
}
