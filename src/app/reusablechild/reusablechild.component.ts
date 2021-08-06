import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-reusablechild',
  templateUrl: './reusablechild.component.html',
  styleUrls: ['./reusablechild.component.css']
})
export class ReusablechildComponent implements OnInit {
@Input() proprtyTanaya :any
  constructor() { }

  ngOnInit(): void {
  }

}
