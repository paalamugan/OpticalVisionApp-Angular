import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameModelEditComponent } from './frame-model-edit.component';

describe('FrameModelEditComponent', () => {
  let component: FrameModelEditComponent;
  let fixture: ComponentFixture<FrameModelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameModelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameModelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
