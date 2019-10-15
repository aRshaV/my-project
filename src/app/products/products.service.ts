import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from './category.interface';
import { Products } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URI = environment.server + '/products';
  private products;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Products>> {
    return this.http.get<Array<Products>>(this.URI);
  }

  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.URI + `/${id}`);
  }

  addProduct(product: Products): void {
    this.http
      .post(this.URI, product)
      .pipe(
        catchError(e => {
          console.error(e);
          return of(`Bad Promise: ${e}`);
        })
      )
      .subscribe(console.log);
  }

  updateProduct(product: Products): void {
    this.http.put(this.URI, product);
  }

  getCategories(): Array<Category> {
    return [
      { name: 'Smartphone', id: 1 } as Category,
      { name: 'Tablet', id: 2 } as Category
    ];
  }

  delete(id: number): void {
    this.http.delete(this.URI + `/${id}`);
  }
}
