import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { MySuperConrolRangeValidator } from './my-super-control-range-validator';

export class MySuperControlValue {
  value1: string;
  value2: number;
}

export const MY_SUPER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MySuperControlComponent),
  multi: true
};

export const MY_SUPER_RANGE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MySuperControlComponent),
  multi: true
}

@Component({
  selector: 'my-super-control',
  templateUrl: './my-super-control.component.html',
  styleUrls: ['./my-super-control.component.css'],
  providers: [ MY_SUPER_CONTROL_VALUE_ACCESSOR, MY_SUPER_RANGE_VALIDATOR ]
})
export class MySuperControlComponent implements ControlValueAccessor, OnChanges, Validator {

  validateFn: Function;
  private _onChange: () => void;

  validate(c: AbstractControl): { [key: string]: any; } {
    if (this.validateFn){
      debugger;
      return this.validateFn(c);
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    console.log("MySuperControlComponent: registerOnValidatorChange");
    this._onChange = fn;
  }

  ngOnChanges(changes) {
    if (changes.rangeMax || changes.rangeMin) {
      this.validateFn = MySuperConrolRangeValidator(this.rangeMax, this.rangeMin);
    }
  }

  constructor() {
    this.viewModel = new MySuperControlValue();
    this.useDeepCopy = false;
  }

  @Input()
  rangeMax;

  @Input()
  rangeMin;

  @Input()
  useDeepCopy: boolean;

  viewModel: MySuperControlValue;
  isDisabled: boolean;


  get val1() {
    return this.viewModel.value1;
  }

  set val1(newVal1: string) {
    if (newVal1 !== this.viewModel.value1){
      this.viewModel.value1 = newVal1;
      //this.propagateChange(newVal1); //-> WRONG! it would set the whole object in the form as string not MySuperControlValue!
      this.propagateChange(this.viewModel);
      if (this._onChange) this._onChange();
    }
  }

  get val2() : number {
    return this.viewModel.value2;
  }

  set val2(newVal2: number) {
    console.log("set val2");
    if (newVal2 != this.viewModel.value2){
      this.viewModel.value2 = newVal2;
      //this.propagateChange(newVal2); //-> WRONG! it would set the whole object in the form as string not MySuperControlValue!
      this.propagateChange(this.viewModel);
      if (this._onChange) this._onChange();
    }
  }

  onBlur() {
    this.propagateTouched();
  }

  propagateChange = (_: any) => {
    console.log("MySuperControlComponent: propagateChange");
  };

  propagateTouched = () => {
    console.log("MySuperControlComponent: propagateTouched");
  };

  /**This function is also called when we use[(ngModel)] in template-driven forms
   * @param obj
   */
  writeValue(obj: MySuperControlValue): void {
    if ((obj) && (this.viewModel !== obj)) {
      if (this.useDeepCopy){
        this.viewModel.value1 = obj.value1;
        this.viewModel.value2 = obj.value2;
      }
      else {
        this.viewModel = obj;
      }
      console.log("MySuperControlComponent: writeValue");
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   * Angular provides you with a function and asks you to call it whenever there is a change in your component with
   * the new value so that it can update the control.
   * @param fn
   */
  registerOnChange(fn: any): void {
    console.log("MySuperControlComponent: registerOnChange");
    if (this.useDeepCopy){
      this.propagateChange = fn;
    }
  }

  /**
   * The registerOnTouched method is the same as registerOnChange except that you should call her when the control
   * receives a touch event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    console.log("MySuperControlComponent: registerOnTouched");
    if (this.useDeepCopy) {
      this.propagateTouched = fn;
    }
  }

  /**
   * This function is called when the control status changes to or from DISABLED.
   * Depending on the value, it will enable or disable the appropriate DOM element.
   * @param {boolean} isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    console.log("MySuperControlComponent: isDisabled");
    this.isDisabled = isDisabled;
  }

}
