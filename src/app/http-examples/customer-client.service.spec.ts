import { TestBed, inject } from '@angular/core/testing';

import { CustomerClientService } from './customer-client.service';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { Customer } from './customer';
import { myMockBackendServiceProvider } from './my-mock-backend.service.provider';
import { MockBackend } from '@angular/http/testing';

describe('CustomerClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerClientService,
        myMockBackendServiceProvider,
        MockBackend,
        BaseRequestOptions],
      imports: [HttpModule]
    });
  });

  it('service should be created', inject([CustomerClientService], (service: CustomerClientService) => {
    expect(service).toBeTruthy();
  }));

  it('getCustomerByRequestDefinition should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
        service.getCustomerByRequestDefinition().subscribe(
          (succ: Customer) => {
            expect(succ.Name).toEqual("Jacek123");
            expect(succ.SecondName).toEqual("KowalskiABC");
          },
          (err: any) => {
          }
        )
    })
  );

  it('getCustomerByHttpGet should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
      service.getCustomerByHttpGet().subscribe(
        (succ: Customer) => {
          expect(succ.Name).toEqual("Jacek123");
          expect(succ.SecondName).toEqual("KowalskiABC");
        },
        (err: any) => {
        }
      )
    })
  );

  it('getCustomerByHttpGetWithMapCatch should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
      service.getCustomerByHttpGetWithMapCatch().subscribe(
        (succ: Customer) => {
          expect(succ.Name).toEqual("Jacek123");
          expect(succ.SecondName).toEqual("KowalskiABC");
        },
        (err: any) => {
        }
      )
    })
  );

});
