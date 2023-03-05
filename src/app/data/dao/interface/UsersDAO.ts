import {CommonDAO} from "./CommonDAO";
import {Users} from "../../../model/Users";
import {Observable} from "rxjs";


export interface UsersDAO extends CommonDAO<UsersDAO> {

  search(findName: string): Observable<Users[]>;
}
