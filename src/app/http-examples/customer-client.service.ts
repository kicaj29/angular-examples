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

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      options.url = "data/customer.json";
      options.method = RequestMethod.Get;
      let req = new Request(options);

      this.http.request(req).subscribe(
        (succ: Response) => {

          let data = succ.json();
          console.log(JSON.stringify(data));
          console.log(data);

          let obj: Customer = <Customer>succ.json();
          console.log(obj);
          subscriber.next(obj);
          subscriber.complete();
        },
        (err: any) => {

          console.log(JSON.stringify(err));
          subscriber.error(err);
        });

    });
    return response;
  }

  getCustomerByHttpGet(): Observable<Customer> {

    let response = new Observable<Customer>((subscriber: Subscriber<Customer>) => {
      this.http.get('data/customer.json').subscribe(
        (succ: Response) => {

          let data = succ.json();
          console.log(JSON.stringify(data));
          console.log(data);

          let obj: Customer = <Customer>succ.json();
          console.log(obj);
          subscriber.next(obj);
          subscriber.complete();
        },
        (err: any) => {

          console.log(JSON.stringify(err));
          subscriber.error(err);
        })
    });
    return response;

  }

  getCustomerByHttpGetWithMapCatch(): Observable<Customer> {
    return this.http.get('data/customer.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //we have to return object that fits to type T in Observable<T>
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
