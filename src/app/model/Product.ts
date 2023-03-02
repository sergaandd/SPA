export class Product{
  id: number ;
  name: string ;
  price: number ;
  details: string ;
  file_name: string ;
  status?: string ;

  constructor(id: number, name: string, price: number, details: string, file_name: string, status?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.details = details;
    this.file_name = file_name;
    this.status = status;
  }
}
