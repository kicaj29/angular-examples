import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';
import { routing } from './dependency-injection-examples.routing';
import { ExistingProviderExampleComponent } from './existing-provider-example/existing-provider-example.component';
import { MyDataService } from './existing-provider-example/my-data.service';
import { ROOT_MYDATASERVICE } from './existing-provider-example/token';
import { ChildComponent } from './existing-provider-example/child/child.component';
import { GrandChildComponent } from './existing-provider-example/child/grand-child/grand-child.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DependencyInjectionExamplesComponent, ExistingProviderExampleComponent, ChildComponent, GrandChildComponent],
  providers: [
    MyDataService,
    { provide: ROOT_MYDATASERVICE, useExisting: MyDataService }
  ]
})
export class DependencyInjectionExamplesModule { }
