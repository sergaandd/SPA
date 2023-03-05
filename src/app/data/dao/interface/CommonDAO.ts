import {Observable} from "rxjs";
import {Product} from "../../../model/Product";

export interface CommonDAO<T> {

  add(T: any): Observable<Product[]>;//add new object
  delete(id: number): Observable<Product[]> ; //delete object by id
  update(id: number): Observable<Product[]>; //update object by id
  get(id: number): Observable<Product[]> ; //get object by id
  getAll(): Observable<Product[][]> ; // get all objects

}
