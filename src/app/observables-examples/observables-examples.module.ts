import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './observables-examples.routing';
import { ObservablesExamplesComponent } from './observables-examples.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { UnsubscribeUseComponent } from './unsubscribe-use/unsubscribe-use.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ObservablesExamplesComponent, ObservableVsPromiseComponent, UnsubscribeUseComponent]
})
export class ObservablesExamplesModule { }
