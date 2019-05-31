import { MockBackend, MockConnection } from '@angular/http/testing';
import { RequestMethod, ResponseOptions, Response, Http, BaseRequestOptions } from '@angular/http';
import { Customer } from './customer';

export let myMockBackendServiceFactory =  (backend: MockBackend, options: BaseRequestOptions) => {

  backend.connections.subscribe((c: MockConnection) => {
    console.log('mockConnection url:: ' + c.request.url);

    if (c.request.url === "data/customer.json" && c.request.method === RequestMethod.Get) {

      let cust = new Customer();
      cust.Name = "Jacek123";
      cust.SecondName = "KowalskiABC";

      c.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(cust)
      })));
    }
  });

  return new Http(backend, options);

};

export let myMockBackendServiceProvider =
{
  provide: Http,
  deps: [MockBackend, BaseRequestOptions],
  useFactory: myMockBackendServiceFactory
};
