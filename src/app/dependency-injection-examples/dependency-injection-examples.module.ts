import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';
import { routing } from './dependency-injection-examples.routing';
import { ExistingProviderExampleComponent } from './existing-provider-example/existing-provider-example.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DependencyInjectionExamplesComponent, ExistingProviderExampleComponent]
})
export class DependencyInjectionExamplesModule { }
