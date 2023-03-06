
import { Component, Inject} from '@angular/core';
import { Product } from '../../model/Product';
import { ProductHandlerService } from '../../service/product-handler.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-basket',
  templateUrl: './add-product-basket.component.html',
  styleUrls: ['./add-product-basket.component.css']
})
export class AddProductBasketComponent {
  constructor(
    dialogRef: MatDialogRef<AddProductBasketComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Product, string], // данные, которые передали в диалоговое окно
    dataHandler: ProductHandlerService, // ссылка на сервис для работы с данными
    dialog: MatDialog
  ) {}
  dialogTitle: string | any; // заголовок окна
  product: Product | any;

  ngOnInit() {
    this.product = this.data[0]; // задача для редактирования/создания
    this.dialogTitle = this.data[1];
    console.log(this.data);
  }
}
