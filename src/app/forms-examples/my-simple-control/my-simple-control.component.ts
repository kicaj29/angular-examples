import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const MY_SIMPLE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => {
    console.log("forwardRef: MySimpleControlComponent");
    debugger;
    return MySimpleControlComponent;
    }
  ),
  //useExisting: MySimpleControlComponent,
  multi: true
};

@Component({
  selector: 'my-simple-control',
  templateUrl: './my-simple-control.component.html',
  styleUrls: ['./my-simple-control.component.css'],
  providers: [ MY_SIMPLE_CONTROL_VALUE_ACCESSOR ]
})
export class MySimpleControlComponent implements ControlValueAccessor {

  //The internal data model
  private innerValue: any = '';

  isDisabled: boolean;

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => {

  };

  private onChangeCallback = (_: any) => {
    console.log("I will never be executed!!!");
  };

  constructor() {

  }

  onBlur() {
    this.onTouchedCallback();
  }

  //get accessor used only in html template for this control
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback, used only in html template for this control
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      //if function onChangeCallback is not called changes done in this control
      //are not propagated to form that uses this control!!!
      this.onChangeCallback(v);
    }
  }

  writeValue(obj: any): void {
    if ((obj) && (obj !== this.innerValue)) {
      //here we set innerValue and not value because there is no need to call onChangeCallback.
      this.innerValue = obj;
      console.log("MySimpleControlComponent: writeValue");
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
