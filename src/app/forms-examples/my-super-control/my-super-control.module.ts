import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySuperControlComponent } from './my-super-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule //only to be able use ngModel in my-super-control
  ],
  declarations: [MySuperControlComponent],
  exports: [MySuperControlComponent]
})
export class MySuperControlModule { }
