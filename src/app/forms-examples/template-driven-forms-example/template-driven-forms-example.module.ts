import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateDrivenFormsExampleComponent],
  exports: [TemplateDrivenFormsExampleComponent]
})
export class TemplateDrivenFormsExampleModule { }
