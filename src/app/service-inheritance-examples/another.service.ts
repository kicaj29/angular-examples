import { Injectable } from '@angular/core'
import { CustomerService } from './customer.service';

@Injectable()
export class AnotherService {
  constructor(private customerService: CustomerService){

  }

  getData(): string {
    return this.customerService.getCustomer();
  }

}
