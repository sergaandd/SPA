export class Users {
  id: number;
  name: string;
  password: string;
  role: string;
  fio:string;
  city:string;
  phone:string;
  adress:string;


  constructor(id: number, name: string, password: string, role: string,
              fio:string,city:string,  phone:string, adress:string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
    this.fio = fio;
    this.city = city;
    this.phone = phone;
    this.adress = adress;
  }
}
