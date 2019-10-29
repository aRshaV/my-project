import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from '../products.interface';
import { ProductsService } from '../products.service';
import { Subject, Subscription } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<Products>;
  param: string;

  private subject: Subject<string>;
  private subscription: Subscription;

  constructor(private productsService: ProductsService) {
    this.subject = new Subject();
    this.subscription = new Subscription();
    this.products = [];
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.subscription.add(
      this.subject
        .pipe(
          debounceTime(250),
          distinctUntilChanged()
        )
        .subscribe(param => {
          this.products = this.productsService.getProducts().filter(product => product.name.startsWith(param));
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(id: number): void {
    this.productsService.delete(id);
  }

  onChange() {
    this.subject.next(this.param);
  }
}
