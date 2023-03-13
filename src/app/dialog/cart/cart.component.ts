import {Component, Inject} from '@angular/core';
import {Cart} from "../../model/Cart";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductHandlerService} from "../../service/product-handler.service";
import {TestData} from "../../data/TestData";
import {of} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  dialogTitle: string | any; // заголовок окна
  cartProduct: Cart[]| any ;
  cartSum: number| any ;

  constructor(
    private dialogRef: MatDialogRef<CartComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Cart[],string], // данные, которые передали в диалоговое окно
    private dataHandler: ProductHandlerService, // ссылка на сервис для работы с данными
    private dialog: MatDialog
  ) {}

  cartSumCalculate():number {
    return this.cartProduct.reduce((accumulator:number, object:Cart) => {
      return accumulator + object.qty*object.price;
    }, 0);
  }
  ngOnInit() {
    this.dialogTitle = this.data[1];
    this.cartProduct = this.data[0];
    this.cartSum=this.cartSumCalculate();
  }

  closeOrder() {

  }

  onClose() {
    this.dialogRef.close(null);
  }

  cartItemDelete(cartItem: Cart) {
    TestData.cartSource.splice(TestData.cartSource.indexOf(cartItem), 1);
    this.cartSum = this.cartSumCalculate();
    return of(cartItem);
  }
}
