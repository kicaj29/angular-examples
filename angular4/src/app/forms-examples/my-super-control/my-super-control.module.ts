import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySuperControlComponent } from './my-super-control.component';
import { FormsModule } from '@angular/forms';
import {
  MySuperControlForbiddenValueValidatorDirective
} from './my-super-control-forbidden-value-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule //only to be able use ngModel in my-super-control
  ],
  declarations: [MySuperControlComponent, MySuperControlForbiddenValueValidatorDirective],
  /**
   * Export declarable classes that components in other modules are able to reference in their templates.
   * These are your public classes. If you don't export a class, it stays private,
   * visible only to other component declared in this module.
   */
  exports: [MySuperControlComponent, MySuperControlForbiddenValueValidatorDirective
  ]
})
export class MySuperControlModule { }
