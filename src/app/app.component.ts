import {Component, OnInit} from '@angular/core';
import {Product} from "./model/Product";
import {ProductHandlerService} from "./service/product-handler.service";
import {Category} from "./model/Category";
import {Cart} from "./model/Cart";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] | any;
  cart: Cart[] | any;
  selectedCategory: Category | any;

  constructor(private productHandler: ProductHandlerService) {

  }

  ngOnInit() {
    this.categories = this.productHandler.getCategories();
    this.cart = this.productHandler.getCart();
  }

  showProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.productHandler.getProductsByCategory(category);
  }
}
