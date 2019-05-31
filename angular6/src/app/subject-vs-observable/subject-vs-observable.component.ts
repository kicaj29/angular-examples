import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';

@Component({
  selector: 'app-subject-vs-observable',
  templateUrl: './subject-vs-observable.component.html',
  styleUrls: ['./subject-vs-observable.component.css']
})
export class SubjectVsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  runObservable() {
    const observable = new Observable(observer => {
      setTimeout(() => observer.next('hello from Observable! ' + Date.now()), 1000);
    });

    //every subscribe causes new execution of setTimeout!!!
    observable.subscribe(v => console.log(v));
    observable.subscribe(v => console.log(v));
    observable.subscribe(v => console.log(v));
  }

  runSubject() {

    const subject = new Subject();

    subject.next('missed message from Subject');

    subject.subscribe(v => console.log(v));
    subject.subscribe(v => console.log(v));
    subject.subscribe(v => console.log(v));

    subject.next('hello from subject! ' + Date.now());

  }
}
