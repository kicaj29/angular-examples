import { Injectable } from '@angular/core';

console.log('SharedService1 bundled because one components use it');

@Injectable({
  providedIn: 'root'
})
export class SharedService1 {
  constructor() {
    console.log('SharedService1 instantiated');
  }
}
