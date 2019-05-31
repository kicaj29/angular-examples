import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { SubjectVsObservableComponent } from './subject-vs-observable/subject-vs-observable.component';
import { TableColResizeComponent } from './table-col-resize/table-col-resize.component';

export let appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tree-shakeable-providers'
  },
  {
    path: 'tree-shakeable-providers',
    loadChildren: './tree-shakeable-providers/tree-shakeable-providers.module#TreeShakeableProvidersModule'
  },
  {
    path: 'tab-col-resize',
    component: TableColResizeComponent
  },
  {
    path: 'subject-vs-observable',
    component: SubjectVsObservableComponent
  },
  {
    path: 'rxjs-operators',
    component: RxjsOperatorsComponent
  }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
