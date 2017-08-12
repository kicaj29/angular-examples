import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExamplesComponent } from './http-examples.component';
import { routing } from './http-examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HttpExamplesComponent]
})
export class HttpExamplesModule { }
