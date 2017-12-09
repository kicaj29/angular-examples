import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromsNestedComponentsExampleComponent } from './reactive-froms-nested-components-example.component';

describe('ReactiveFromsNestedComponentsExampleComponent', () => {
  let component: ReactiveFromsNestedComponentsExampleComponent;
  let fixture: ComponentFixture<ReactiveFromsNestedComponentsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFromsNestedComponentsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFromsNestedComponentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
