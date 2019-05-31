import {Injectable} from '@angular/core'
import { CustomerBaseService } from './customer-base.service';

@Injectable()
export class CustomerService extends CustomerBaseService  {
  constructor(){
    super();
  }

  getCustomer(): string {
    return "customer";
  }

}
