import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveExamplesComponent } from './resolve-examples.component';
import { routing } from './resolve-examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ResolveExamplesComponent]
})
export class ResolveExamplesModule { }
