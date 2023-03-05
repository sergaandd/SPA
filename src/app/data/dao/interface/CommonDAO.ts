import {Observable} from "rxjs";

export interface CommonDAO<T> {

  add(T: any): Observable<T>;//add new object
  delete(id: number): Observable<T>; //delete object by id
  update(id: number): Observable<T>; //update object by id
  get(id: number): Observable<T>; //get object by id
  getAll(): Observable<T[]>; // get all objects

}
