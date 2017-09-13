import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenValueValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    console.log('forbiddenValueValidator in progress');
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenValue': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[forbiddenValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenValue: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenValue ? forbiddenValueValidator(new RegExp(this.forbiddenValue, 'i'))(control)
      : null;
  }
}
