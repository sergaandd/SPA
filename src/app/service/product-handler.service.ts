import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {TestData} from "../data/TestData";
import {BehaviorSubject, Subject} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {
  oneProductSubject = new Subject<Product[]>();
  productsSubject = new BehaviorSubject<Product[]>(TestData.productsSource);

  constructor() {
  }

  getProducts() {
    this.productsSubject.next(TestData.productsSource);
  }

  getProductById(productById: Product) {
    let oneProduct = TestData.productsSource.filter(product => product.id === productById.id);
    this.oneProductSubject.next(oneProduct);
  }

  getCategories(): Category[] {
    return TestData.categorySource;
  }
  getProductsByCategory(category: Category){
    if (category.id==1) {
      this.productsSubject.next(TestData.productsSource);
    } else {
      let productsByCategory = TestData.productsSource.filter(product => product.category === category.id);
      this.productsSubject.next(productsByCategory);
    }
  }
}
