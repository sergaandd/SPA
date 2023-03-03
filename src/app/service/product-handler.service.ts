import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {TestData} from "../data/TestData";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {
  oneProductSubject = new Subject<Product[]>();

  constructor() {
  }

  getProducts(): Product[] {
    return TestData.productsSource;
  }

  getProductById(productById: Product) {
    let oneProduct = TestData.productsSource.filter(product => product.id === productById.id);
    this.oneProductSubject.next(oneProduct);
  }
}
