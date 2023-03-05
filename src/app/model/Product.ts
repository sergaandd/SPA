export class Product {
  id: number ;
  category: number;
  name: string ;
  price: number ;
  details: string ;
  file_name: string ;
  status?: string ;

  constructor(id: number,category:number, name: string, price: number, details: string, file_name: string, status?: string) {
    this.id = id;
    this.category=category;
    this.name = name;
    this.price = price;
    this.details = details;
    this.file_name = file_name;
    this.status = status;
  }
}
