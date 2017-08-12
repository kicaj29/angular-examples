import { TestBed, inject } from '@angular/core/testing';

import { CustomerClientService } from './customer-client.service';
import { HttpModule } from '@angular/http';
import { Customer } from './customer';

describe('CustomerClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerClientService],
      imports: [HttpModule]
    });
  });

  it('service should be created', inject([CustomerClientService], (service: CustomerClientService) => {
    expect(service).toBeTruthy();
  }));

  it('getCustomerByRequestDefinition should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
        service.getCustomerByRequestDefinition().subscribe(
          (succ: Customer) => {
            expect(succ.Name).toEqual("Jacek");
            expect(succ.SecondName).toEqual("Kowalski");
          },
          (err: any) => {
          }
        )
    })
  );

  it('getCustomerByHttpGet should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
      service.getCustomerByHttpGet().subscribe(
        (succ: Customer) => {
          expect(succ.Name).toEqual("Jacek");
          expect(succ.SecondName).toEqual("Kowalski");
        },
        (err: any) => {
        }
      )
    })
  );

  it('getCustomerByHttpGetWithMapCatch should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
      service.getCustomerByHttpGetWithMapCatch().subscribe(
        (succ: Customer) => {
          expect(succ.Name).toEqual("Jacek");
          expect(succ.SecondName).toEqual("Kowalski");
        },
        (err: any) => {
        }
      )
    })
  );

});
