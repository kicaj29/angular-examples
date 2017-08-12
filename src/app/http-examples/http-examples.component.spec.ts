import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExamplesComponent } from './http-examples.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

describe('HttpExamplesComponent', () => {
  let component: HttpExamplesComponent;
  let fixture: ComponentFixture<HttpExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpExamplesComponent ],
      imports: [
        RouterModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
