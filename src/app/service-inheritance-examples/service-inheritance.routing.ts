import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my/my.component';
const routes: Routes = [
  { path: '', component: MyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
