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

  it('should ...', inject([CustomerClientService], (service: CustomerClientService) => {
    expect(service).toBeTruthy();
  }));
  it('should return customer data', inject([CustomerClientService], (service: CustomerClientService) => {
    service.getCustomerByRequestDefinition().subscribe(
      (succ: Customer) => {
        expect(succ.Name).toEqual("Jacek");
        expect(succ.SecondName).toEqual("Placek");
      },
      (err: any) => {

      }
    )
  }));
});
