import { Component, Inject, OnInit } from '@angular/core';
import { ROOT_MYDATASERVICE } from '../../token';

@Component({
  selector: 'grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  constructor(@Inject(ROOT_MYDATASERVICE) public dataService) { }

  ngOnInit() {
  }

}
