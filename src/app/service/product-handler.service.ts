import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {TestData} from "../data/TestData";

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {

  constructor() { }

  getProducts(): Product[]{
    return TestData.products;
}
}
