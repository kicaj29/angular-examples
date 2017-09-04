import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example.component';
import { MySuperControlModule } from '../my-super-control/my-super-control.module';

@NgModule({
  imports: [
    CommonModule,
    MySuperControlModule
  ],
  declarations: [TemplateDrivenFormsExampleComponent],
  exports: [TemplateDrivenFormsExampleComponent]
})
export class TemplateDrivenFormsExampleModule { }
