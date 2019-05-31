import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeShakeableProvidersComponent } from './tree-shakeable-providers.component';

const routes: Routes = [
  { path: '', component: TreeShakeableProvidersComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
