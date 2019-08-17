import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService } from '../services/product.service'; 

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	products: ProductType[];

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

	deleteProduct(product) {
		this.productService.deleteProduct(product.id).subscribe(data => {
			this.products = this.products.filter(item => item.id !== data.id);
		});
	}

	// detailProduct = product => {
	// 	this.selectedProduct = product;
	// }

}
