import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export let appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'http-examples'
  },
  {
    path: 'http-examples',
    loadChildren: './http-examples/http-examples.module#HttpExamplesModule'
  },
  {
    path: 'service-inheritance-examples',
    loadChildren: './service-inheritance-examples/service-inheritance.module#ServiceInheritenceModule'
  },
  {
    path: 'date-examples',
    loadChildren: './date-examples/date-examples.module#DateExamplesModule'
  },
  {
    path: 'forms-examples',
    loadChildren: './forms-examples/forms-examples.module#FormsExamplesModule'
  },
  {
    path: 'forwardref-examples',
    loadChildren: './forwardref-examples/forwardref-examples.module#ForwardrefExamplesModule'
  },
  {
    path: 'dependency-injection-examples',
    loadChildren: './dependency-injection-examples/dependency-injection-examples.module#DependencyInjectionExamplesModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
