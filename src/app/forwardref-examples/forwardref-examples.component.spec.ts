import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardrefExamplesComponent } from './forwardref-examples.component';

describe('ForwardrefExamplesComponent', () => {
  let component: ForwardrefExamplesComponent;
  let fixture: ComponentFixture<ForwardrefExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardrefExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardrefExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
