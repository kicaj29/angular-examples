import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveFromsExampleComponent } from './reactive-froms-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReactiveFromsExampleComponent, HeroDetailComponent],
  exports: [ReactiveFromsExampleComponent]
})
export class ReactiveFormsExampleModule { }
