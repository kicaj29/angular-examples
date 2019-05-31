import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-http-examples',
  templateUrl: './forms-examples.component.html',
  styleUrls: ['./forms-examples.component.css']
})
export class FormsExamplesComponent implements OnInit {

  mode: string;
  constructor() {
    this.mode = "REACTIVE_FORMS";
  }

  ngOnInit() {
  }

}
