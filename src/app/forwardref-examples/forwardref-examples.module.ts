import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForwardrefExamplesComponent } from './forwardref-examples.component';
import { routing } from './forwardref-examples.routing';
import { ForwardrefUseclassComponent } from './forwardref-useclass/forwardref-useclass.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ForwardrefExamplesComponent, ForwardrefUseclassComponent]
})
export class ForwardrefExamplesModule { }
