import {Component, Inject} from '@angular/core';
import {Cart} from "../../model/Cart";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductHandlerService} from "../../service/product-handler.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  dialogTitle: string | any; // заголовок окна
  customerDetails: Users | any ;

  constructor(
    private dialogRef: MatDialogRef<CustomerDetailsComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Users,string], // данные, которые передали в диалоговое окно
    private dataHandler: ProductHandlerService, // ссылка на сервис для работы с данными
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dialogTitle = this.data[1];
    this.customerDetails = this.data[0];
  }

  onClose() {
    this.dialogRef.close(null);
  }

  sendOrder() {

  }
}
