import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerResolverService implements Resolve<Customer> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log("resolving customer...");
    let cust = new Customer();
    cust.Name = "Super name";
    cust.SecondName = "Super second name";
    return cust;
  }
}
