import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForwardrefExamplesComponent } from './forwardref-examples.component';

const routes: Routes = [
  { path: '', component: ForwardrefExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
