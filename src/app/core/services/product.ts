import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private url = 'data/static-products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => response.products)
   );
  }

  getProductById(id:string):Observable<any | undefined>{
    console.log(id);
    
  return this.getProducts()
  .pipe(

    map(products =>
      products.find(p => p.id === id)
    )

  );

  }
}
