import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardrefUseclassComponent } from './forwardref-useclass.component';

describe('ForwardrefUseclassComponent', () => {
  let component: ForwardrefUseclassComponent;
  let fixture: ComponentFixture<ForwardrefUseclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardrefUseclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardrefUseclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
