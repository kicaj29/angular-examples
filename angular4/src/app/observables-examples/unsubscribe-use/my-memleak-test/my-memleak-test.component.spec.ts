import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMemleakTestComponent } from './my-memleak-test.component';

describe('MyMemleakTestComponent', () => {
  let component: MyMemleakTestComponent;
  let fixture: ComponentFixture<MyMemleakTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMemleakTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMemleakTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
