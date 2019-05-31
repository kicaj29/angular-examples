import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColResizeComponent } from './table-col-resize.component';

describe('TableColResizeComponent', () => {
  let component: TableColResizeComponent;
  let fixture: ComponentFixture<TableColResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
