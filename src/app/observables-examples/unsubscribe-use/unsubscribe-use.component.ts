import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'unsubscribe-use',
  templateUrl: './unsubscribe-use.component.html',
  styleUrls: ['./unsubscribe-use.component.css']
})
export class UnsubscribeUseComponent implements OnInit, OnDestroy {

  show: boolean = false;
  myObservable: Observable<number>;
  private observer: Subscriber<number>;
  interval: any;
  myPromise: Promise<number>;

  constructor() { }

  ngOnInit() {
  }

  createObservable() {
    this.myObservable = new Observable<number>((observer) => {
      this.observer = observer;
    });

    //create subscribe to force initialization of the observer
    this.myObservable.subscribe(data => {

    });

    this.interval = setInterval(() => {
      this.observer.next(Date.now());
    },3000);

  }

  callNext(){
    this.observer.next(Date.now());
  }

  ngOnDestroy(): void {
    console.log("UnsubscribeUseComponent: ngOnDestroy");

    clearInterval(this.interval);
  }

  createPromise() {
    this.myPromise = new Promise((resolve) => {
      console.log('promise begin');
      setTimeout(() => {
        let now = Date.now();
        console.log('promise timeout hit ' + now.toString());
        resolve(now);
      }, 5000);
      console.log('promise end');
    });


    console.log('createPromise is finished');
  }

}
