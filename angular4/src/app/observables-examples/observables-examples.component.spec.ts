import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesExamplesComponent } from './observables-examples.component';

describe('ObservablesExamplesComponent', () => {
  let component: ObservablesExamplesComponent;
  let fixture: ComponentFixture<ObservablesExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
