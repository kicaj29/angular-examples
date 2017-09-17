import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionExamplesComponent } from './dependency-injection-examples.component';

describe('DependencyInjectionExamplesComponent', () => {
  let component: DependencyInjectionExamplesComponent;
  let fixture: ComponentFixture<DependencyInjectionExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectionExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
