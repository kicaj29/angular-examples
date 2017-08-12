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
/*      let customer = new Customer();
      customer.Name = "Jacek";
      customer.SecondName = "Placek";
      subscriber.next(customer);
      subscriber.complete();*/

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      options.url = "data/customer.json";
      options.method = RequestMethod.Get;
      let req = new Request(options);

      this.http.request(req).subscribe(
        (succ: Response) => {
          debugger;
          let data = succ.json();
          console.log(JSON.stringify(data));
          console.log(data);

          let obj: Customer = <Customer>succ.json();
          console.log(obj);
          subscriber.next(obj);
          subscriber.complete();
        },
        (err: any) => {
          debugger;
          console.log(JSON.stringify(err));
          subscriber.error(err);
        });

    });
    return response;
  }

}
