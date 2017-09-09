export class RangeValidatorMessage {
  value: number;
  minNumber: number;
  maxNumber: number;
}

export function numberRangeValidator(valueToValidate, maxValue, minValue) {

    if (!valueToValidate){
      return null;
    }

    let err = new RangeValidatorMessage();
    err.value = valueToValidate;
    err.maxNumber = maxValue;
    err.minNumber = minValue;

    return (valueToValidate > +maxValue || valueToValidate < +minValue) ? err: null;
}
