import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateExamplesComponent } from './date-examples.component';
import { routing } from './date-examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DateExamplesComponent]
})
export class DateExamplesModule { }
