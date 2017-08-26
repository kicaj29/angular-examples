import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherService } from './another.service';
import { CustomerService } from './customer.service';
import { CustomerBaseService } from './customer-base.service';
import { MyComponent } from './my/my.component';
import { routing } from "./service-inheritance.routing";


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [AnotherService, CustomerService, CustomerBaseService],
  declarations: [MyComponent]
})
export class ServiceInheritenceModule { }
