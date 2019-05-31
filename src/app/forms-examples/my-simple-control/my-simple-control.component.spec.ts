import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySimpleControlComponent } from './my-simple-control.component';

describe('MySimpleControlComponent', () => {
  let component: MySimpleControlComponent;
  let fixture: ComponentFixture<MySimpleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySimpleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySimpleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
