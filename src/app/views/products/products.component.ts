import {Component, OnInit} from '@angular/core';
import {ProductHandlerService} from "../../service/product-handler.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private productHandler: ProductHandlerService) {

  }

  ngOnInit() {
    this.products = this.productHandler.getProducts();
  }

}
