import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {UserserviceService} from '../userservice.service'
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  currentVal = '';
  userdata = "";
  constructor(private userService : UserserviceService) {
    console.log("in service=========");
    console.log(this.userService.getProductListData());
    let userDetails = this.userService.getProductListData();
    this.userdata = userDetails.name;
  }

  getVal(val: any) {
    //console.warn(event);
    this.currentVal = val;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  // Pass data to child componenet //

  // data = "Tanaya Lokare";
  data1 = {
    name: 'Tanaya',
    age: '27',
    email: 'tanaya@gmail.com',
  };

  reusableData = [
    {
      name: 'Dina',
      age: '23',
      address: 'kankali',
    },
    {
      name: 'Tanaya',
      age: '34',
      address :"kudal"
    },
    {
      name: 'pranita',
      age: '22',
      address :"pune"

    },
  ];

  parentVal = "";
  parentComponenetFun(Val:any){
    this.parentVal = Val
    //console.warn(Val);
  }

  ngOnInit(): void {
   // console.log(this.data1);
  }

  //pipe example //
  pipeName  = "Hie dear how are you" ;
  todayDate = Date.now();
  str = 'hello world';
  currencyVal = 100
}
