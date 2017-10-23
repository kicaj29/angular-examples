import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './observables-examples.routing';
import { ObservablesExamplesComponent } from './observables-examples.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ObservablesExamplesComponent]
})
export class ObservablesExamplesModule { }
