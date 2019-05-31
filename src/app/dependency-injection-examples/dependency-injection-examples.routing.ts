import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';

const routes: Routes = [
  { path: '', component: DependencyInjectionExamplesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
