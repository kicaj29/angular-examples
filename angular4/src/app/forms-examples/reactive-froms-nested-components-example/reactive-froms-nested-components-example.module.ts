import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFromsNestedComponentsExampleComponent } from './reactive-froms-nested-components-example.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildFormComponent } from './child-form/child-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveFromsNestedComponentsExampleComponent, ParentFormComponent, ChildListComponent, ChildFormComponent],
  exports: [ReactiveFromsNestedComponentsExampleComponent]
})
export class ReactiveFromsNestedComponentsExampleModule { }
