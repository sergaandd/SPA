export class Cart {
  id: number ;
  name: string ;
  price: number ;
  qty: number ;
  customerId: number;
  file_name: string;

  constructor(id: number, name: string, price: number, qty: number,customerId: number,
              file_name: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.customerId = customerId;
    this.file_name=file_name;
  }
}
