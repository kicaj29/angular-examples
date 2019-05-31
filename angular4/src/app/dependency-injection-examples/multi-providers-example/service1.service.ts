import { Injectable } from '@angular/core'
import { MySuperInterface } from './my-super-interface';

@Injectable()
export class Service1 implements MySuperInterface {

  getName(): string {
    return "I am Service one";
  }

  constructor(){

  }

}
