import {Component, OnInit} from '@angular/core';
import {Product} from "./model/Product";
import {ProductHandlerService} from "./service/product-handler.service";
import {Category} from "./model/Category";
import {Cart} from "./model/Cart";
import {AddProductBasketComponent} from "./dialog/add-product-basket/add-product-basket.component";
import {CartComponent} from "./dialog/cart/cart.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] | any;
  cart: Cart[] | any;
  selectedCategory: Category | any;

  constructor(private productHandler: ProductHandlerService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.categories = this.productHandler.getCategories();
    this.cart = this.productHandler.getCart();
  }

  showProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.productHandler.getProductsByCategory(category);
  }

  openCartDialog() {
    let dialogRef = this.dialog.open(CartComponent, {
      data: [this.cart,'Кошик ваших товарів'],
      hasBackdrop: true,
      width:"60%",
      disableClose: true,
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
