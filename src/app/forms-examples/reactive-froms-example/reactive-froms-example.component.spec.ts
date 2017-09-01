import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromsExampleComponent } from './reactive-froms-example.component';

describe('ReactiveFromsExampleComponent', () => {
  let component: ReactiveFromsExampleComponent;
  let fixture: ComponentFixture<ReactiveFromsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFromsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFromsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
