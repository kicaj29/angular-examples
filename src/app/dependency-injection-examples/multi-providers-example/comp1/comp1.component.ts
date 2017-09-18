import { Component, OnInit, forwardRef } from '@angular/core';
import { MY_SUPER_INTERFACE_TOKEN, MySuperInterface } from '../my-super-interface';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [
    {
      provide: MY_SUPER_INTERFACE_TOKEN,
      useExisting: forwardRef(() => Comp1Component),
      multi: true
    }
  ]
})
export class Comp1Component implements OnInit, MySuperInterface {

  constructor() { }

  ngOnInit() {
  }

  getName() : string {
    return "I am comp one!";
  }

}
