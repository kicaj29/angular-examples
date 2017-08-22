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
    path: 'resolve-examples',
    loadChildren: './resolve-examples/resolve-examples.module#ResolveExamplesModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
