import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import { AddProductBasketComponent } from './dialog/add-product-basket/add-product-basket.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CartComponent } from './dialog/cart/cart.component';
import { CustomerDetailsComponent } from './dialog/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductBasketComponent,
    CartComponent,
    CustomerDetailsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  entryComponents:[
    AddProductBasketComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
