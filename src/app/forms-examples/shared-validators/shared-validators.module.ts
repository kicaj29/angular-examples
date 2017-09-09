import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './forbidden-value.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ForbiddenValidatorDirective ],
  exports: [ ForbiddenValidatorDirective ]
})
export class SharedValidatorsModule { }
