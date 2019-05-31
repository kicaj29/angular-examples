import { Component, Inject, OnInit } from '@angular/core';
import { MY_SUPER_INTERFACE_TOKEN, MySuperInterface } from './my-super-interface';
import { Service1 } from './service1.service';
import { Service2 } from './service2.service';

@Component({
  selector: 'multi-providers-example',
  templateUrl: './multi-providers-example.component.html',
  styleUrls: ['./multi-providers-example.component.css'],
  providers: [
    {
      provide: MY_SUPER_INTERFACE_TOKEN,
      useClass: Service1,
      multi: true
    },
    {
      provide: MY_SUPER_INTERFACE_TOKEN,
      useClass: Service2,
      multi: true
    },
  ]
})
export class MultiProvidersExampleComponent implements OnInit {

  constructor(@Inject(MY_SUPER_INTERFACE_TOKEN) mySuper: MySuperInterface[]) {
    debugger;
    for (let x of mySuper) {
      console.log(x.getName());
    }
  }

  ngOnInit() {
  }

}
