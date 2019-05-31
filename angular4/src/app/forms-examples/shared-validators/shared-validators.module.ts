import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './forbidden-value.directive';
import { ForbiddenValidatorAsyncDirective } from './forbidden-value-async.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ForbiddenValidatorDirective, ForbiddenValidatorAsyncDirective ],
  exports: [ ForbiddenValidatorDirective, ForbiddenValidatorAsyncDirective ]
})
export class SharedValidatorsModule { }
