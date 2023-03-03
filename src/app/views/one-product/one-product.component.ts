import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductHandlerService} from "../../service/product-handler.service";

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})

export class OneProductComponent implements OnInit {
  oneProduct: Product[] | undefined;

  constructor(private productHandler: ProductHandlerService) {

  }

  ngOnInit() {
    this.productHandler.oneProductSubject
    .subscribe(product => this.oneProduct = product);
  }

}
