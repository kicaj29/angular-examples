import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateExamplesComponent } from './date-examples.component';

const routes: Routes = [
  { path: '', component: DateExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
