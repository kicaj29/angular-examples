import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeShakeableProvidersComponent } from './tree-shakeable-providers.component';
import { routing } from './tree-shakeable-providers.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TreeShakeableProvidersComponent]
})
export class TreeShakeableProvidersModule { }
