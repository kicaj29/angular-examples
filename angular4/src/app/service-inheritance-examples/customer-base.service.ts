import {Injectable} from '@angular/core'

@Injectable()
export class CustomerBaseService {
  constructor(){

  }

  getCustomer(): string {
    return "base customer";
  }

}
