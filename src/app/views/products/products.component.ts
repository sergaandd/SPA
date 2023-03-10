import {Component, OnInit} from '@angular/core';
import {ProductHandlerService} from "../../service/product-handler.service";
import {Product} from "../../model/Product";
import {DialogPosition, MatDialog} from "@angular/material/dialog";
import {
  AddProductBasketComponent
} from "../../dialog/add-product-basket/add-product-basket.component";
import {Cart} from "../../model/Cart";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] | any;
  cart: Cart[] | any;

  constructor(
    private productHandler: ProductHandlerService,
    private dialog: MatDialog) {

  }

  ngOnInit():void {
    this.productHandler.productsSubject.subscribe(products => this.products = products);
  }

  openAddProductDialog(product: Product) {
    let dialogRef = this.dialog.open(AddProductBasketComponent, {
      data: [product, 'Додати товар до кошика'],
      hasBackdrop: true,
      width:"400px",
      disableClose: true,
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
