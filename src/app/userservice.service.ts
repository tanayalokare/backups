import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  getProductListData(){
    return {
      id : 103,
      name:'Tanaya',
      age:30,
      address : 'kankavli'

    }
  }
}
