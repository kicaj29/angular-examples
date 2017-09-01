import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsExamplesComponent } from './forms-examples.component';
import { routing } from './forms-examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FormsExamplesComponent],
  providers: []
})
export class FormsExamplesModule { }
