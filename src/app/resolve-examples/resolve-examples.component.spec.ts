import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveExamplesComponent } from './resolve-examples.component';

describe('ResolveExamplesComponent', () => {
  let component: ResolveExamplesComponent;
  let fixture: ComponentFixture<ResolveExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
