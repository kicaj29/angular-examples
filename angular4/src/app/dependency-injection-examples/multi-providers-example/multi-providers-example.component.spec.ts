import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProvidersExampleComponent } from './multi-providers-example.component';

describe('MultiProvidersExampleComponent', () => {
  let component: MultiProvidersExampleComponent;
  let fixture: ComponentFixture<MultiProvidersExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiProvidersExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiProvidersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
