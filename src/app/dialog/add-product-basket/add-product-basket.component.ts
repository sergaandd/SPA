import { Component, Inject} from '@angular/core';
import { Product } from '../../model/Product';
import { ProductHandlerService } from '../../service/product-handler.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import {Cart} from "../../model/Cart";
import {TestData} from "../../data/TestData";

@Component({
  selector: 'app-add-product-basket',
  templateUrl: './add-product-basket.component.html',
  styleUrls: ['./add-product-basket.component.css']
})
export class AddProductBasketComponent {
  private dialogTitle: string | any; // заголовок окна
  product: Product | any;
  public qtyOrder: number |any;

  constructor(
    private dialogRef: MatDialogRef<AddProductBasketComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Product, string], // данные, которые передали в диалоговое окно
    private dataHandler: ProductHandlerService, // ссылка на сервис для работы с данными
    private dialog: MatDialog
  ) {}


  ngOnInit() {
    this.qtyOrder=1;
    this.product = this.data[0]; // задача для редактирования/создания
    this.dialogTitle = this.data[1];
  }
  private getNewIdCart(): number {
    return Math.max.apply(Math,TestData.cartSource.map(cart=>cart.id))+1;
  }

  AddProductToCart() {
      const newProductInCart = new Cart(this.getNewIdCart(),
      this.product.name,
      this.product.price,
      this.qtyOrder,
      0,
      this.product.file_name);
      TestData.cartSource.push(newProductInCart);
      this.dialogRef.close(Product);
  }

  onCancel(): void {
  this.dialogRef.close(null);
  }
}
