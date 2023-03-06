import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import { OneProductComponent } from './views/one-product/one-product.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import { AddProductBasketComponent } from './dialog/add-product-basket/add-product-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OneProductComponent,
    AddProductBasketComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[
    AddProductBasketComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
