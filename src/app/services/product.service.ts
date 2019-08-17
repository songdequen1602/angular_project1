import { Injectable } from '@angular/core';
import { ProductType } from '../Products';
// import { DataProduct } from '../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = DataProduct;
  private API: string = 'http://5d418b3b75f67300146b3f1c.mockapi.io/';
  constructor( private http: HttpClient) { }

  getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${this.API}/products`);
  }

  getProduct(id): Observable<ProductType>{
    return this.http.get<ProductType>(`${this.API}/products/${id}`);
  }
  addProduct(product): Observable<ProductType>{
    return this.http.post<ProductType>(`${this.API}/products`, product)
    // console.log(product);
    //   const newProduct = {
    //       id: this.products.length + 1,
    //        ...product
    //       }
    //   this.products.push(newProduct)
  }
  deleteProduct(id): Observable<ProductType>{
    return this.http.delete<ProductType>(`${this.API}/products/${id}`);
  }
  editProduct(product): Observable<ProductType>{
    return this.http.put<ProductType>(`${this.API}/products/${product.id}`, product)
  }
}


