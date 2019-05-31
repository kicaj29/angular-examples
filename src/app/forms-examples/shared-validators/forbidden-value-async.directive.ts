import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors,
  Validator
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

export function forbiddenValueAsyncValidator(nameRe: RegExp): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

/*      const forbidden = nameRe.test(control.value);
      if (forbidden){
        return of({'forbiddenValueAsync': {value: control.value}}).delay(4000);
      }
      else {
        return of(null);
      }*/

      return new Observable(observer => {
        setTimeout(() => {
          const forbidden = nameRe.test(control.value);
          if (forbidden) {
            console.log("forbiddenValueAsyncValidator: forbidden");
            observer.next({'forbiddenValueAsync': {value: control.value}});
          }
          else {
            console.log("forbiddenValueAsyncValidator: NOT forbidden");
            observer.next(null);
          }
          observer.complete(); //call complete is necessary to finish validation!!!
        }, 4000);
      });
    }
}

@Directive({
  selector: '[forbiddenValueAsync]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => ForbiddenValidatorAsyncDirective),
    multi: true
  }]
})
export class ForbiddenValidatorAsyncDirective implements AsyncValidator {
  @Input() forbiddenValueAsync: string;

  validate(control: AbstractControl):  Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return forbiddenValueAsyncValidator(new RegExp(this.forbiddenValueAsync, 'i'))(control);
  }
}
