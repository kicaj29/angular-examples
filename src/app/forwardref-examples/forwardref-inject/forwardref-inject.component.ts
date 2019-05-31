import { Component, forwardRef, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'forwardref-inject',
  templateUrl: './forwardref-inject.component.html',
  styleUrls: ['./forwardref-inject.component.css']
})
export class ForwardrefInjectComponent implements OnInit {

  name: string;

  constructor(@Inject(forwardRef(() => NameServiceInject)) nameService) {
    this.name = nameService.getName();
  }

  /*constructor(nameService: NameService) {
    this.name = nameService.getName();
  }*/

  ngOnInit() {
  }

}

export class NameServiceInject {
  getName() {
    return "Angular";
  }
}

