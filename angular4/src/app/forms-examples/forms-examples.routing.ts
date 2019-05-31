import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsExamplesComponent } from './forms-examples.component';

const routes: Routes = [
  { path: '', component: FormsExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
