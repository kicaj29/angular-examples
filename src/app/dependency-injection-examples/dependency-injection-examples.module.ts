import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';
import { routing } from './dependency-injection-examples.routing';
import { ExistingProviderExampleComponent } from './existing-provider-example/existing-provider-example.component';
import { MyDataService } from './existing-provider-example/my-data.service';
import { ROOT_MYDATASERVICE } from './existing-provider-example/token';
import { ChildComponent } from './existing-provider-example/child/child.component';
import { GrandChildComponent } from './existing-provider-example/child/grand-child/grand-child.component';
import { MultiProvidersExampleComponent } from './multi-providers-example/multi-providers-example.component';
import { Comp1Component } from './multi-providers-example/comp1/comp1.component';
import { Comp2Component } from './multi-providers-example/comp2/comp2.component';
import { MY_SUPER_INTERFACE_TOKEN } from './multi-providers-example/my-super-interface';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DependencyInjectionExamplesComponent, ExistingProviderExampleComponent, ChildComponent, GrandChildComponent, MultiProvidersExampleComponent, Comp1Component, Comp2Component],
  providers: [
    MyDataService,
    { provide: ROOT_MYDATASERVICE, useExisting: MyDataService }
    //{ provide: MY_SUPER_INTERFACE_TOKEN, useExisting: undefined, multi: true}
  ]
})
export class DependencyInjectionExamplesModule { }
