import { Component, Inject, OnInit } from '@angular/core';
import { ROOT_MYDATASERVICE } from '../../token';
import { MyDataService } from '../../my-data.service';
import { ChildComponent } from '../child.component';

@Component({
  selector: 'grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  constructor(@Inject(ROOT_MYDATASERVICE) public dataService: MyDataService, public cc: ChildComponent) {
    debugger;
  }
  //constructor(public dataService: MyChildDataService) { }

  ngOnInit() {

  }

}
