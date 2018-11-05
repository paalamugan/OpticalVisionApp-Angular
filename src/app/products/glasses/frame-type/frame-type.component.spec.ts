import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeComponent } from './frame-type.component';

describe('FrameTypeComponent', () => {
  let component: FrameTypeComponent;
  let fixture: ComponentFixture<FrameTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
