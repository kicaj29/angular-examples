import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySimpleControlComponent } from './my-simple-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule //only to be able use ngModel in my-simple-control
  ],
  declarations: [MySimpleControlComponent],
  exports: [MySimpleControlComponent]
})
export class MySimpleControlModule { }
