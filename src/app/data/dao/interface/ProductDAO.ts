import {CommonDAO} from "./CommonDAO";
import {Product} from "../../../model/Product";
import {Category} from "../../../model/Category";
import {Observable} from "rxjs";

export interface ProductDAO extends CommonDAO<Product[]> {
  search(category: Category, findName: string): Observable<Product[]>;
}
