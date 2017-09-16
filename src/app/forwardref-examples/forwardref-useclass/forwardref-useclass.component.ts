import { Component, forwardRef, Inject, InjectionToken, OnInit } from '@angular/core';

export interface IApiConfig {
  apiEndpoint: string;
  title: string;
}

export const MyApiConfig: IApiConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};

export let SIMPLE_TOKEN = new InjectionToken<IApiConfig>('SIMPLE_TOKEN');

//I do not know why but if I move this class below component I get an error even I use forwardRef!!!
class MyService {
  getName () {
    return "-------forwardRef example-------";
  }
}

@Component({
  selector: 'forwardref-useclass',
  templateUrl: './forwardref-useclass.component.html',
  styleUrls: ['./forwardref-useclass.component.css'],
  providers: [
    {
      provide: forwardRef(() => {
        debugger;
        return MyService;
      }),
      useClass: forwardRef(() => {
        debugger;
        return MyService;
      }),
      //useClass: MyService,
      multi: false
    },
    {
      provide: SIMPLE_TOKEN, useValue: MyApiConfig
    }
  ]
})
export class ForwardrefUseclassComponent implements OnInit {

  name: string;
  apiEndpoint: string;
  constructor(private svc: MyService, @Inject(SIMPLE_TOKEN) private config: IApiConfig) { }

  ngOnInit() {
    this.name = this.svc.getName();
    this.apiEndpoint = this.config.apiEndpoint;
  }

}
