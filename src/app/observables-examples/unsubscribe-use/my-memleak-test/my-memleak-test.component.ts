import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnsubscribeUseComponent } from '../unsubscribe-use.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-memleak-test',
  templateUrl: './my-memleak-test.component.html',
  styleUrls: ['./my-memleak-test.component.css']
})
export class MyMemleakTestComponent implements OnInit, OnDestroy {

  constructor(private parent: UnsubscribeUseComponent) { }

  currentValue: number = 0;
  mySubscription: Subscription;

  ngOnInit() {
    if (this.parent.myObservable) {
      this.mySubscription = this.parent.myObservable.subscribe(data => {
        this.currentValue = data;
        console.log("MyMemleakTestComponent: subscribe handled");
      });
    }

    if (this.parent.myPromise) {
      this.parent.myPromise.then(data => {
        console.log("MyMemleakTestComponent: then handled");
      });
    }
  }

  ngOnDestroy() {
    if (this.mySubscription){
      this.mySubscription.unsubscribe();
    }

    console.log("MyMemleakTestComponent: ngOnDestroy");
  }

}
