import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExamplesComponent } from './http-examples.component';
import { routing } from './http-examples.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    routing,
    RouterModule
  ],
  declarations: [HttpExamplesComponent]
})
export class HttpExamplesModule { }
