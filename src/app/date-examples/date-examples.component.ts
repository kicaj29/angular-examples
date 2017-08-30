import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-examples',
  templateUrl: './date-examples.component.html',
  styleUrls: ['./date-examples.component.css']
})
export class DateExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dateExamples(){

    console.log("---Get current time zone offset---");
    let offset = new Date().getTimezoneOffset();
    console.log(offset);

    offset = new Date(Date.now()).getTimezoneOffset();
    console.log(offset);

    let d1 = Date.now(); //now returns number!
    console.log("---now---");
    console.log(d1);
    console.log("d1 toLocaleString: " + d1.toLocaleString());
    console.log("d1 toString: " + d1.toString());
    console.log("d1 toFixed: " + d1.toFixed());

    //month parameter is from 0 (January) to 11 (December)
    let d2UTC = new Date(Date.UTC(2001, 5, 21));

    console.log("---d2UTC---");
    console.log(d2UTC);
    console.log("toLocaleString: " + d2UTC.toLocaleString());
    console.log("toUTCString: " + d2UTC.toUTCString());
    console.log("toString: " + d2UTC.toString());
    console.log("getTimezoneOffset: " + d2UTC.getTimezoneOffset());

    let d3local = new Date(2001, 5, 21);

    console.log("---d3local---");
    console.log(d3local);
    console.log("toLocaleString: " + d3local.toLocaleString());
    console.log("toUTCString: " + d3local.toUTCString());
    console.log("toString: " + d3local.toString());
    console.log("getTimezoneOffset: " + d3local.getTimezoneOffset());

  }
}
