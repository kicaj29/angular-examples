import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './forms-examples.routing';
import { ReactiveFormsExampleModule } from './reactive-froms-example/reactive-forms-example.module';
import { TemplateDrivenFormsExampleModule } from './template-driven-forms-example/template-driven-forms-example.module';
import { FormsModule } from '@angular/forms';
import { FormsExamplesComponent } from './forms-examples.component';
import { ReactiveFromsNestedComponentsExampleModule } from './reactive-froms-nested-components-example/reactive-froms-nested-components-example.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsExampleModule,
    TemplateDrivenFormsExampleModule,
    ReactiveFromsNestedComponentsExampleModule
  ],
  declarations: [FormsExamplesComponent],
  exports: [],
  providers: []
})
export class FormsExamplesModule { }
