import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { MySuperControlValue } from './my-super-control.component';

export function superforbiddenValueValidator(forbiddenValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    console.log("superforbiddenValueValidator");
    let val = <MySuperControlValue>control.value;
    if (val) {
      return forbiddenValue == val.value2 ? {'forbiddenValue': {value: forbiddenValue}} : null;
    }
    else {
      return null;
    }
  };
}

@Directive({
  selector: '[superForbiddenValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MySuperControlForbiddenValueValidatorDirective, multi: true}]
})
export class MySuperControlForbiddenValueValidatorDirective implements Validator {
  @Input() superForbiddenValue: number;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.superForbiddenValue ? superforbiddenValueValidator(this.superForbiddenValue)(control)
      : null;
  }
}
