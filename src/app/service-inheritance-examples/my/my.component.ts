import { Component, OnInit } from '@angular/core';
import { AnotherService } from '../another.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(private svc: AnotherService) { }

  ngOnInit() {
    this.callService();
  }

  private callService(){
    console.log(this.svc.getData());
  }

}
