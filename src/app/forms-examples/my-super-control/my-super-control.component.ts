import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export class MySuperControlValue {
  value1: string;
  value2: string;
}

export const MY_SUPER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MySuperControlComponent),
  multi: true
};

@Component({
  selector: 'my-super-control',
  templateUrl: './my-super-control.component.html',
  styleUrls: ['./my-super-control.component.css'],
  providers: [ MY_SUPER_CONTROL_VALUE_ACCESSOR ]
})
export class MySuperControlComponent implements ControlValueAccessor  {

  constructor() { }

  viewModel: MySuperControlValue;

  propagateChange = (_: any) => {
    console.log("CVA: propagateChange");
  };

  propagateTouched = (_: any) => {
    console.log("CVA: propagateTouched");
  };

  /**This function is also called when we use[(ngModel)] in template-driven forms
   * @param obj
   */
  writeValue(obj: any): void {
    console.log("CVA: writeValue");
    this.viewModel = obj;
  }

  /**
   * Set the function to be called when the control receives a change event.
   * Angular provides you with a function and asks you to call it whenever there is a change in your component with
   * the new value so that it can update the control.
   * @param fn
   */
  registerOnChange(fn: any): void {
    console.log("CVA: registerOnChange");
    //this.propagateChange = fn;
  }

  /**
   * The registerOnTouched method is the same as registerOnChange except that you should call her when the control
   * receives a touch event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    console.log("CVA: registerOnTouched");
    //this.propagateTouched = fn;
  }

  /**
   * This function is called when the control status changes to or from DISABLED.
   * Depending on the value, it will enable or disable the appropriate DOM element.
   * @param {boolean} isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    console.log("CVA: isDisabled");
    //throw new Error('Method not implemented.');
  }

}
