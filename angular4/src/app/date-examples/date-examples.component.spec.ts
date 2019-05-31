import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExamplesComponent } from './date-examples.component';

describe('DateExamplesComponent', () => {
  let component: DateExamplesComponent;
  let fixture: ComponentFixture<DateExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
