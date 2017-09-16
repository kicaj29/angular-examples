import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardrefInjectComponent } from './forwardref-inject.component';

describe('ForwardrefInjectComponent', () => {
  let component: ForwardrefInjectComponent;
  let fixture: ComponentFixture<ForwardrefInjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardrefInjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardrefInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
