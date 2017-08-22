import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveExamplesComponent } from './resolve-examples.component';

const routes: Routes = [
  { path: '', component: ResolveExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
