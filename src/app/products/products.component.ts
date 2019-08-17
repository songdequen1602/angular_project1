import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: ProductType[];
  selectedProduct: ProductType;
  isShowClass: boolean = false;
  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe( data => {
      return this.products = data;
    })
  }



  detailProduct = product => {
    this.selectedProduct = product;
  }
  deleteProduct(product) {
    this.productService.deleteProduct(product.id).subscribe(data => {
      this.products = this.products.filter(item => item.id !== data.id);
    });
  }
  setClass() {
    // return {
    //   'border': this.isShowClass,
    //   'shadow': this.isShowClass
    // }
  }
  clickMe() {
    this.isShowClass = !this.isShowClass;
  }
}
