import {Product} from "../model/Product";
import {Users} from "../model/Users";
import {Category} from "../model/Category";
import {Cart} from "../model/Cart";

export class TestData {

  static productsSource: Product[] = [
    {
      id: 1,
      category: 4,
      name: "Манжета синя 22-32см",
      details: "Манжета темно-синя 22-32см з чорною трубкою типу Microlife." +
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/1.jpg"
    },
    {
      id: 2,category: 5, name: "Манжета сіра 22-32см", details: "Манжета сіра з сірою трубкою типу Gamma"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "Очікується", file_name: "assets/image/2.jpg"
    },
    {
      id: 3,category: 5, name: "Манжета чорна 22-32см", details: "Манжета чорна з чорною трубкою типу A&D"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "В наявності", file_name: "assets/image/3.jpg"
    },
    {
      id: 4,category: 2, name: "Манжета чорна 22-32см", details: "Манжета чорна з сірою трубкою типу A&D"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "Очікується", file_name: "assets/image/4.jpg"
    },
    {
      id: 5,category: 2,
      name: "Манжета чорна 22-40см",
      details: "Манжета темно-синя з чорною трубкою типу Longevita"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/51.jpg"
    },
    {
      id: 6, category: 3,
      name: "Манжета синя 22-32см",
      details: "Манжета світло синя каркасна з білою трубкою типу Medisana"+
        " Довжина трубки 55см, камера PVC. В ящику 80шт. Вага 9,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/6.jpg"
    },
    {
      id: 7, category: 3,
      name: "Манжета сіра 22-42см",
      details: "Манжета світло сіра з сірою трубкою типу Люкс"+
        " Довжина трубки 55см, камера PVC. В ящику 80шт. Вага 9,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/7.jpg"
    },
    {
      id: 8, category: 7,
      name: "Груша латексна",
      details: "Груша латексна, мяка з металевим випускним клапаном у сіліконі." +
        " Без індивідуального пакування. В ящику 100шт. Вага 3,5кг. Розміри ящика 30*30*20см."
      ,
      price: 1,
      status: "В наявності",
      file_name: "assets/image/baloon.jpg"
    },
    { id: 9,
      category: 4,
      name: "Манжета синя 22-32см",
      details: "Манжета темно-синя 22-32см з чорною трубкою типу Microlife." +
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/1.jpg"
    },
    {
      id: 10,category: 5, name: "Манжета сіра 22-32см", details: "Манжета сіра з сірою трубкою типу Gamma"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "Очікується", file_name: "assets/image/2.jpg"
    },
    {
      id: 11,category: 5, name: "Манжета чорна 22-32см", details: "Манжета чорна з чорною трубкою типу A&D"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "В наявності", file_name: "assets/image/3.jpg"
    },
    {
      id: 12,category: 2, name: "Манжета чорна 22-32см", details: "Манжета чорна з сірою трубкою типу A&D"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      , price: 10, status: "Очікується", file_name: "assets/image/4.jpg"
    },
    {
      id: 13,category: 2,
      name: "Манжета чорна 22-40см",
      details: "Манжета темно-синя з чорною трубкою типу Longevita"+
        " Довжина трубки 55см, камера PVC. В ящику 100шт. Вага 11,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/51.jpg"
    },
    {
      id: 14, category: 3,
      name: "Манжета синя 22-32см",
      details: "Манжета світло синя каркасна з білою трубкою типу Medisana"+
        " Довжина трубки 55см, камера PVC. В ящику 80шт. Вага 9,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/6.jpg"
    },
    {
      id: 15, category: 3,
      name: "Манжета сіра 22-42см",
      details: "Манжета світло сіра з сірою трубкою типу Люкс"+
        " Довжина трубки 55см, камера PVC. В ящику 80шт. Вага 9,5кг. Розміри ящика 39*60*17см."
      ,
      price: 10,
      status: "В наявності",
      file_name: "assets/image/7.jpg"
    },
    {
      id: 16, category: 7,
      name: "Груша латексна",
      details: "Груша латексна, мяка з металевим випускним клапаном у сіліконі."+
        " Без індивідуального пакування. В ящику 100шт. Вага 3,5кг. Розміри ящика 30*30*20см."
      ,
      price: 1,
      status: "В наявності",
      file_name: "assets/image/baloon.jpg"
    }
  ];

  static categorySource: Category[]=[
    {id: 1, name: "Всі"},
    {id: 2, name: "Медтехніка"},
    {id: 3, name: "Товари для здоров'я"},
    {id: 4, name: "Глюкометри і розходники"},
    {id: 5, name: "Бандажі"},
    {id: 6, name: "Комплектуючи"},
    {id: 7, name: "Ортопедія"},
    {id: 8, name: "Новинка"},
    {id: 9, name: "Акція"}
  ];

  static usersSource: Users[] = [
    {id: 1, name: "user", password: "1", role: "user"},
    {id: 2, name: "admin", password: "1", role: "admin"}
  ];

  static cartSource: Cart[]=[
    {
      id: 1,
      name: "Манжета синя 22-32см",
      price: 10,
      qty: 5,
      file_name: "assets/image/1.jpg"
    },
    {
      id: 2,
      name: "Груша латексна",
      price: 1,
      qty: 2,
      file_name: "assets/image/baloon.jpg"
    }
  ];
}
