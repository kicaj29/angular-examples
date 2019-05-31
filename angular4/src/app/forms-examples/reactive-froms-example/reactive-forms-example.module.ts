import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveFromsExampleComponent } from './reactive-froms-example.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { MySuperControlModule } from '../my-super-control/my-super-control.module';
import { MySimpleControlModule } from '../my-simple-control/my-simple-control.module';
import { SharedValidatorsModule } from '../shared-validators/shared-validators.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MySuperControlModule,
    MySimpleControlModule,
    SharedValidatorsModule
  ],
  providers: [HeroService],
  declarations: [ReactiveFromsExampleComponent, HeroDetailComponent, HeroListComponent],
  exports: [ReactiveFromsExampleComponent]
})
export class ReactiveFormsExampleModule { }
