import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveExamplesComponent } from './resolve-examples.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerResolverService } from './customer/customer-resolver.service';

const routes: Routes = [
  { path: '', component: ResolveExamplesComponent },
  { path: 'customer', component: CustomerComponent, resolve: {
    cust_data: CustomerResolverService
  } }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
