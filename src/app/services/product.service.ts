import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProductList(value):Observable<any>{
    console.log(value);
    
    return this.httpClient.get('https://fakestoreapi.com/products/'+value)

  }

  getProducts():Observable<any>{
    
    
    return this.httpClient.get('https://fakestoreapi.com/products');

  }
}
