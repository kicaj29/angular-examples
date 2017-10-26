import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'unsubscribe-use',
  templateUrl: './unsubscribe-use.component.html',
  styleUrls: ['./unsubscribe-use.component.css']
})
export class UnsubscribeUseComponent implements OnInit {

  show: boolean = false;
  myObservable: Observable<number>;
  private observer: Subscriber<number>;

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
  }

  callNext(){
    this.observer.next(Date.now());
  }

}
