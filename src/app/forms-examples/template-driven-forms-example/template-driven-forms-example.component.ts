import { Component, OnInit } from '@angular/core';
import { MySuperControlValue } from '../my-super-control/my-super-control.component';

@Component({
  selector: 'template-driven-forms-example',
  templateUrl: './template-driven-forms-example.component.html',
  styleUrls: ['./template-driven-forms-example.component.css']
})
export class TemplateDrivenFormsExampleComponent implements OnInit {

  customer : MySuperControlValue;
  field1: string;
  //@ViewChild('myForm') form: Form;

  constructor() {
    this.customer = new MySuperControlValue();
    this.customer.value1 = "Jacek";
    this.customer.value2 =  26;
  }

  ngOnInit() {
  }

  submit(){
    debugger;
  }

}
