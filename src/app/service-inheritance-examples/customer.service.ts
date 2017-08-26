import {Injectable} from '@angular/core'

@Injectable()
export class CustomerService {
  constructor(){

  }

  getCustomer(): string {
    return "customer";
  }

}
