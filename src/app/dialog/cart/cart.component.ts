import {Component, Inject} from '@angular/core';
import {Cart} from "../../model/Cart";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductHandlerService} from "../../service/product-handler.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  dialogTitle: string | any; // заголовок окна
  cartProduct: Cart[] | any;

  constructor(
    private dialogRef: MatDialogRef<CartComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Cart[],string], // данные, которые передали в диалоговое окно
    private dataHandler: ProductHandlerService, // ссылка на сервис для работы с данными
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dialogTitle = this.data[1];
    this.cartProduct = this.data[0]; // задача для редактирования/создания
  console.log(this.cartProduct[0].name);
  }

  closeOrder() {

  }

  onClose() {
    this.dialogRef.close(null);
  }

  openDeleteDialog(id: Cart) {

  }

  cartItemDelete(cartItem: Cart) {

  }
}
