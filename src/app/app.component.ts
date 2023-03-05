import {Component, OnInit} from '@angular/core';
import {Product} from "./model/Product";
import {ProductHandlerService} from "./service/product-handler.service";
import {Category} from "./model/Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] | undefined;
  selectedCategory: Category | undefined;

  constructor(private productHandler: ProductHandlerService) {

  }

  ngOnInit() {
    this.categories = this.productHandler.getCategories();
  }

  showProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.productHandler.getProductsByCategory(category);
  }
}
