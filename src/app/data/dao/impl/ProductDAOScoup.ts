import {ProductDAO} from "../interface/ProductDAO";
import {Product} from "../../../model/Product";
import {Observable} from "rxjs";
import {Category} from "../../../model/Category";

export class ProductDAOScoup implements ProductDAO{
  add(T: any): Observable<Product[]> | any {
    return undefined;
  }

  delete(id: number): Observable<Product[]> | any {
    return undefined;
  }

  get(id: number): Observable<Product[]> | any {
    return undefined;
  }

  getAll(): Observable<Product[][]> | any {
    return undefined;
  }

  search(category: Category, findName: string): Observable<Product[]> | any {
    return undefined;
  }

  update(id: number): Observable<Product[]> | any {
    return undefined;
  }

}
