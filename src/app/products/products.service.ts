import { Injectable } from '@angular/core';
import { Product } from './products.interface';
import { Category } from './category.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private serverUri = environment.server + 'product';

  constructor(private http: HttpClient) {}

  save(product: Product): Observable<any> {
    if (product.id > 0) {
      return this.updateProduct(product);
    } else {
      return this.addProduct(product);
    }
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.serverUri);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.serverUri + `/${id}`);
  }

  getCategories(): Array<Category> {
    return [
      { name: 'Smartphone', id: 1 } as Category,
      { name: 'Tablet', id: 2 } as Category
    ];
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.serverUri + `/${id}`);
  }

  private addProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.serverUri, product);
  }

  private updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(this.serverUri + `/${product.id}`, product);
  }
}
