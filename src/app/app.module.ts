import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import { OneProductComponent } from './views/one-product/one-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OneProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
