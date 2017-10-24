import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeUseComponent } from './unsubscribe-use.component';

describe('UnsubscribeUseComponent', () => {
  let component: UnsubscribeUseComponent;
  let fixture: ComponentFixture<UnsubscribeUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
