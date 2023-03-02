import {Product} from "../model/Product";
import {Users} from "../model/Users";

export class TestData{

  static products: Product[]=[
    {id: 1, name: "Манжета синя 22-32см", details: "Манжета темно-синя з чорною трубкою типу Microlife"
    , price: 2.35, status: "Очікується в квітні 2023р.", file_name: "/image/1.jpg"},
    {id: 2, name: "Манжета сіра 22-32см", details: "Манжета сіра з сірою трубкою типу Gamma"
      , price: 2.35, status: "Очікується в квітні 2023р.", file_name: "/image/2.jpg"},
    {id: 3, name: "Манжета чорна 22-32см", details: "Манжета чорна з чорною трубкою типу A&D"
      , price: 2.35, status: "Очікується в квітні 2023р.", file_name: "/image/3.jpg"},
    {id: 4, name: "Манжета чорна 22-32см", details: "Манжета чорна з сірою трубкою типу A&D"
      , price: 2.35, status: "Очікується в квітні 2023р.", file_name: "/image/4.jpg"},
    {id: 5, name: "Манжета чорна 22-32см", details: "Манжета темно-синя з чорною трубкою типу Longevita"
      , price: 2.35, status: "Очікується в квітні 2023р.", file_name: "/image/5.jpg"},
  ];

  static users: Users[]=[
    {id: 1, name: "user", password: "1", role:"user"},
    {id: 2, name: "admin", password: "1", role:"admin"}
  ];
}
