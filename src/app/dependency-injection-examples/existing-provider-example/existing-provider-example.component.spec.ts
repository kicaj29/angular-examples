import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingProviderExampleComponent } from './existing-provider-example.component';

describe('ExistingProviderExampleComponent', () => {
  let component: ExistingProviderExampleComponent;
  let fixture: ComponentFixture<ExistingProviderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingProviderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingProviderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
