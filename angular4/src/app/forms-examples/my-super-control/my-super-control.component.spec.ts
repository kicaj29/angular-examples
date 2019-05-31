import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperControlComponent } from './my-super-control.component';

describe('MySuperControlComponent', () => {
  let component: MySuperControlComponent;
  let fixture: ComponentFixture<MySuperControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySuperControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuperControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
