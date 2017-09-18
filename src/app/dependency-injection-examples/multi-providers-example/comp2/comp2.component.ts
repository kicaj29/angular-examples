import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { MY_SUPER_INTERFACE_TOKEN, MySuperInterface } from '../my-super-interface';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers: [
    {
      provide: MY_SUPER_INTERFACE_TOKEN,
      useExisting: forwardRef(() => Comp2Component),
      multi: true
    }
  ]
})
export class Comp2Component implements OnInit, MySuperInterface {

  constructor() {
    debugger;
  }

  ngOnInit() {
  }

  getName() : string {
    return "I am comp two!";
  }
}
