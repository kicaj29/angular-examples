import { FormControl } from '@angular/forms';

export function createNumberRangeValidator(maxValue, minValue) {
  return function validateNumberRange(c: FormControl) {
    debugger;
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };
    debugger;
    return (c.value.value2 > +maxValue || c.value.value2 < +minValue) ? err: null;
  }
}
