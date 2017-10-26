import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnsubscribeUseComponent } from '../unsubscribe-use.component';

@Component({
  selector: 'my-memleak-test',
  templateUrl: './my-memleak-test.component.html',
  styleUrls: ['./my-memleak-test.component.css']
})
export class MyMemleakTestComponent implements OnInit, OnDestroy {

  constructor(private parent: UnsubscribeUseComponent) { }

  currentValue: number = 0;

  ngOnInit() {
    this.parent.myObservable.subscribe(data => {
      this.currentValue = data;
      console.log("MyMemleakTestComponent: subscribe");
    });
  }

  ngOnDestroy() {
    console.log("MyMemleakTestComponent: ngOnDestroy");
  }

}
