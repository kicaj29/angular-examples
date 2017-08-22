import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CustomerResolverService implements Resolve<Customer> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    return Observable.create((subscriber: Subscriber<Customer>) => {
      console.log("resolving customer...");
      setTimeout(() => {
        let cust = new Customer();
        cust.Name = "Super name";
        cust.SecondName = "Super second name";
        console.log("customer created");
        subscriber.next(cust);
        subscriber.complete();
        console.log("customer resolved");
      }, 3000);

    });


  }
}
