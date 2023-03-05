import {CommonDAO} from "./CommonDAO";
import {Users} from "../../../model/Users";


export interface UsersDAO extends CommonDAO<UsersDAO> {

  search(findName: string): Users[];
}
