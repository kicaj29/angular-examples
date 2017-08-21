import { Component, OnInit } from '@angular/core';
import './rxjs-extensions';
import { Customer } from './customer';
import { CustomerClientService } from './customer-client.service';

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css']
})
export class HttpExamplesComponent implements OnInit {

  private viewModel: Customer;
  constructor(private svc: CustomerClientService) { }

  ngOnInit() {
  }

  getCustomerByRequestDefinition(){
    this.svc.getCustomerByRequestDefinition().subscribe(
      (cust: Customer) =>{
        this.viewModel = cust;
      },
      (err: any) => {

      }
    );
  }

  getCustomerByHttpGet(){
    this.svc.getCustomerByHttpGet().subscribe(
      (cust: Customer) =>{
        this.viewModel = cust;
      },
      (err: any) => {

      }
    );
  }

  getCustomerByHttpGetWithMapCatch(){
    this.svc.getCustomerByHttpGetWithMapCatch().subscribe(
      (cust: Customer) =>{
        this.viewModel = cust;
      },
      (err: any) => {

      }
    );
  }

}
