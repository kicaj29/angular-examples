import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsExamplesComponent } from './forms-examples.component';
import { routing } from './forms-examples.routing';
import { ReactiveFormsExampleModule } from './reactive-froms-example/reactive-forms-example.module';
import { TemplateDrivenFormsExampleModule } from './template-driven-forms-example/template-driven-forms-example.module';
import { MySuperControlComponent } from './my-super-control/my-super-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsExampleModule,
    TemplateDrivenFormsExampleModule
  ],
  declarations: [FormsExamplesComponent],
  exports: [MySuperControlComponent],
  providers: []
})
export class FormsExamplesModule { }
