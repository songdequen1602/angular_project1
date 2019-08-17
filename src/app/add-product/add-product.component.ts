import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: ProductType = new ProductType();
  @Input('data') products: ProductType[];
  constructor(
    private productService: ProductService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      // this.products.push(data);
      this.router.navigateByUrl('/admin');
    });
  }
}
