import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveExamplesComponent } from './resolve-examples.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '', component: ResolveExamplesComponent },
  { path: 'customer', component: CustomerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
