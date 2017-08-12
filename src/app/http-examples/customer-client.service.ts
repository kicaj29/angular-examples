import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CustomerClientService {

  constructor(private http: Http) { }

  getCustomerByRequestDefinition(): Observable<Customer> {

    let response = new Observable<Customer>((subscriber: Subscriber<Customer>) => {
      let customer = new Customer();
      customer.Name = "Jacek";
      customer.SecondName = "Placek";
      subscriber.next(customer);
      subscriber.complete();
    });
    return response;
  }

}
