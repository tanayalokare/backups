import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'angularFirstProject';

  myEvent(evt:any){
   
    console.warn(evt);
  }

  funExample(){
    this.router.navigateByUrl('/more-example');

  }
 
}
