import { FormControl } from '@angular/forms';
import { MySuperControlValue } from './my-super-control.component';
import { numberRangeValidator } from '../shared-validators/number-range-validator';

export function MySuperConrolRangeValidator(maxValue, minValue) {
  return function validateNumberRange(c: FormControl) {
    console.log("MySuperConrolRangeValidator");
    let v = <MySuperControlValue>c.value;
    if (v){
      return numberRangeValidator(v.value2, maxValue, minValue);
    }
    else {
      return numberRangeValidator(null, maxValue, minValue);
    }
  }
}
