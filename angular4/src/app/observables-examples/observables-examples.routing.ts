import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesExamplesComponent } from './observables-examples.component';

const routes: Routes = [
  { path: '', component: ObservablesExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
