import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childtest',
  templateUrl: './childtest.component.html',
  styleUrls: ['./childtest.component.css']
})
export class ChildtestComponent implements OnInit {
@Output() parentComponent : EventEmitter<any> = new EventEmitter;
name :any;
city:any
constructor() { }

  ngOnInit(): void {
  
  }

  sendData(){
    let dataArray = {name :"Pramod", city : "kalmath"} ;
    this.parentComponent.emit(dataArray); 
  }

}
