import { Injectable } from '@angular/core';

console.log('Shared2Service is not bundled because it is not used and providedIn root is used');

@Injectable({
  providedIn: 'root'
})
export class Shared2Service {
  constructor() { }
}
