import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsExamplesComponent } from './forms-examples.component';
import { routing } from './forms-examples.routing';
import { ReactiveFormsExampleModule } from './reactive-froms-example/reactive-forms-example.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ReactiveFormsExampleModule
  ],
  declarations: [FormsExamplesComponent],
  providers: []
})
export class FormsExamplesModule { }
