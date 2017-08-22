import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cust: Customer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("CustomerComponent ngOnInit...");
    this.cust = this.route.snapshot.data['cust_data'];
  }

}
