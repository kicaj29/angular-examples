import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './observables-examples.routing';
import { ObservablesExamplesComponent } from './observables-examples.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { UnsubscribeUseComponent } from './unsubscribe-use/unsubscribe-use.component';
import { MyMemleakTestComponent } from './unsubscribe-use/my-memleak-test/my-memleak-test.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ObservablesExamplesComponent, ObservableVsPromiseComponent, UnsubscribeUseComponent, MyMemleakTestComponent]
})
export class ObservablesExamplesModule { }
