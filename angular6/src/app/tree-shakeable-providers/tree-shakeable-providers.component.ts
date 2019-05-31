import { Component, OnInit } from '@angular/core';
import { SharedService1 } from './shared1.service';
import { Shared4Service } from './shared4.service';

@Component({
  selector: 'app-tree-shakeable-providers',
  templateUrl: './tree-shakeable-providers.component.html',
  styleUrls: ['./tree-shakeable-providers.component.css']
})
export class TreeShakeableProvidersComponent implements OnInit {

  constructor(svc1: SharedService1) {

  }

  ngOnInit() {
  }

}
