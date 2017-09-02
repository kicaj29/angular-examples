import { Component, forwardRef } from '@angular/core';
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

  viewModel: MySuperControlValue;

  propagateChange = (_: any) => {
    console.log("CVA: propagateChange");
  };

  propagateTouched = (_: any) => {
    console.log("CVA: propagateTouched");
  };

  writeValue(obj: any): void {
    console.log("CVA: writeValue");
    this.viewModel = obj;
  }

  registerOnChange(fn: any): void {
    console.log("CVA: registerOnChange");
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log("CVA: registerOnTouched");
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log("CVA: isDisabled");
    //throw new Error('Method not implemented.');
  }


  constructor() { }


}
