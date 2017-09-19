import { Component, OnInit } from '@angular/core';
import { MyChildDataService, MyDataService } from '../my-data.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    { provide: MyDataService, useClass: MyChildDataService }
    // Remove comments to use root DataService instance
    // { provide: DataService, useClass: DataService }
  ]
})
export class ChildComponent implements OnInit {

  constructor(public dataService: MyDataService) {
    debugger;
  }

  ngOnInit() {
  }

}
