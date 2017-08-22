import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveExamplesComponent } from './resolve-examples.component';
import { routing } from './resolve-examples.routing';
import { CustomerComponent } from './customer/customer.component';
import { CustomerResolverService } from './customer/customer-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [CustomerResolverService],
  declarations: [ResolveExamplesComponent, CustomerComponent]
})
export class ResolveExamplesModule { }
