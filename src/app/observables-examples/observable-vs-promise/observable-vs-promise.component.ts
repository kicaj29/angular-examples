import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MyModel } from './my-model';
import { Http } from '@angular/http';

@Component({
  selector: 'observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css']
})
export class ObservableVsPromiseComponent implements OnInit {

  private myPromise: Promise<number>;
  private myObservable: Observable<number>;
  private myObservableArray: Observable<Array<MyModel>>;
  private disposable: any;
  private disposableArray: any;
  private contacts: any;
  private contacts2: any;

  constructor() {
/*    this.contacts = http
      .get('data/contacts.json') //I do not know why type script does not see map function
      .map((r: Response) => {
        return r.json().items
      })
      .share();

    setTimeout(() => this.contacts2 = this.contacts, 1500);*/
  }

  ngOnInit() {
  }

  createPromise() {
    console.log('started createPromise...');

    //1. Promise is executed together with his constructor.
    //   There is no need to call 'then' to start execution of promise (eager loading).

    //2. There is no possibility to cancel promise.

    //3. If we call multiple times ‘then’ on the same instance of promise the promise only return value,
    //   content of promise is executed only one time!

    this.myPromise = new Promise((resolve) => {
      console.log('promise begin');
      setTimeout(() => {
        let now = Date.now();
        console.log('promise timeout hit ' + now.toString());
        resolve(now);
      }, 1000);
      console.log('promise end');
    });


    console.log('createPromise is finished');
  }

  thenPromise() {
    this.myPromise.then(value => {
      console.log('returned value is ' + value.toString());
    });

  }

  createObservable() {
    console.log('started createObservable...');

    //1. Observable by default is executed only when we call

    //2. There is possibility to cancel observable but from unknow reasones it does not work in my example

    //3. If we call observale multple times it is executed every time from scratch

    this.myObservable = new Observable<number>((observer) => {
      var id = setTimeout(() => {
        let now = Date.now();
        console.log('Observable timeout hit ' + now.toString());
        observer.next(now);
      }, 3000);

      return () => {
        console.log('Observable cancel/dispose called');
        clearTimeout(id);
      }
    });
    console.log('createObservable is finished');
  }

  forEachObservable() {
    this.disposable = this.myObservable.forEach((value) => {
      console.log('observable returned ' + value.toString());
    });
  }

  cancelObservable() {
    debugger;
    this.disposable.dispose();
  }

  createObservableAsArray() {
    console.log('started createObservable as array...');

    this.myObservableArray = new Observable<Array<MyModel>>((observer) => {
      var id = setTimeout(() => {
        let now = Date.now();
        console.log('Observable as array timeout hit ' + now.toString());
        let model = new MyModel();
        model.id = now.toString();
        model.name = "name_" + model.id.toString();
        let models: MyModel[];
        models = [];
        models.push(model);
        observer.next(models);
      }, 3000);

      return () => {
        console.log('Observable as array cancel/dispose called');
        clearTimeout(id);
      }
    });
    console.log('createObservable as array is finished');

  }

  forEachObservableAsArray() {
    console.log('forEachObservableAsArray started...');
    this.disposableArray = this.myObservableArray.forEach((value) => {
      for (let entry of value) {
        console.log(`id: ${entry.id}, name: ${entry.name}`);
      }
    });
  }

  cancelObservableAsArray() {
  }

}
