import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeEditComponent } from './frame-type-edit.component';

describe('FrameTypeEditComponent', () => {
  let component: FrameTypeEditComponent;
  let fixture: ComponentFixture<FrameTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
