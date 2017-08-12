import { Component, OnInit } from '@angular/core';
import './rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Customer } from './customer';

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css']
})
export class HttpExamplesComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getHttpViaRequest() {

    debugger;
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
      },
      (err: any) => {
        debugger;
        console.log(JSON.stringify(err));
      });
  }

  getHttp() {
    console.log("getHttp START");

    this.http.get('data/customer.json').subscribe(
      (succ: Response) => {
        debugger;
        let data = succ.json();
        console.log(JSON.stringify(data));
        console.log(data);

        let obj: Customer = <Customer>succ.json();
        console.log(obj);
      },
      (err: any) => {
        debugger;
        console.log(JSON.stringify(err));
      })

    console.log("getHttp END");
  }

  getHttpRxJsOperatorsDisplayData() {
    this.getHttpRxJsOperators().subscribe(
      (succ: Customer) => {
        debugger;
        console.log(succ);
      },
      (err: any) => {
      }
    )
  }

  getHttpRxJsOperators(): Observable<Customer> {

    console.log("getHttp START RXJS");

    return this.http.get('data/customer.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    debugger;
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
