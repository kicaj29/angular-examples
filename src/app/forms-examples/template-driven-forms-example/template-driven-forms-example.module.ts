import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example.component';
import { MySuperControlModule } from '../my-super-control/my-super-control.module';
import { FormsModule } from '@angular/forms';
import { MySimpleControlModule } from '../my-simple-control/my-simple-control.module';
import { SharedValidatorsModule } from '../shared-validators/shared-validators.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MySuperControlModule,
    MySimpleControlModule,
    SharedValidatorsModule
  ],
  declarations: [TemplateDrivenFormsExampleComponent],
  exports: [TemplateDrivenFormsExampleComponent]
})
export class TemplateDrivenFormsExampleModule { }
