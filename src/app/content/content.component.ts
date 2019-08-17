import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService } from '../services/product.service'; 

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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



	// detailProduct = product => {
	// 	this.selectedProduct = product;
	// }
}
