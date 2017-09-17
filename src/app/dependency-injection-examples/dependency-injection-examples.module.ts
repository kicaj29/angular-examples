import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';
import { routing } from './dependency-injection-examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DependencyInjectionExamplesComponent]
})
export class DependencyInjectionExamplesModule { }
