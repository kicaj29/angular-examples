import { Component, OnInit } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'existing-provider-example',
  templateUrl: './existing-provider-example.component.html',
  styleUrls: ['./existing-provider-example.component.css']
})
export class ExistingProviderExampleComponent implements OnInit {

  constructor(public dataService: MyDataService) { }

  ngOnInit() {
  }

}
