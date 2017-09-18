import { Injectable } from '@angular/core'
import { MySuperInterface } from './my-super-interface';

@Injectable()
export class Service2 implements MySuperInterface {

  getName(): string {
    return "I am Service two";
  }

  constructor(){

  }

}
