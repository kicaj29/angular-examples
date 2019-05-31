import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExamplesComponent } from './forms-examples.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

describe('FormsExamplesComponent', () => {
  let component: FormsExamplesComponent;
  let fixture: ComponentFixture<FormsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExamplesComponent ],
      imports: [
        RouterModule,
        HttpModule
      ],
      providers: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
