import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForwardrefExamplesComponent } from './forwardref-examples.component';
import { routing } from './forwardref-examples.routing';
import { ForwardrefUseclassComponent } from './forwardref-useclass/forwardref-useclass.component';
import { ForwardrefInjectComponent, NameServiceInject } from './forwardref-inject/forwardref-inject.component';

@NgModule({
  providers: [NameServiceInject],
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ForwardrefExamplesComponent, ForwardrefUseclassComponent, ForwardrefInjectComponent]
})
export class ForwardrefExamplesModule { }
