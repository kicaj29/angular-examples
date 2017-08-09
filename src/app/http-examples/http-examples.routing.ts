import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpExamplesComponent } from './http-examples.component';

const routes: Routes = [
  { path: '', component: HttpExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
