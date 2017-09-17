import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dependency-injection-examples',
  templateUrl: './dependency-injection-examples.component.html',
  styleUrls: ['./dependency-injection-examples.component.css']
})
export class DependencyInjectionExamplesComponent implements OnInit {

  exampleNumber: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
