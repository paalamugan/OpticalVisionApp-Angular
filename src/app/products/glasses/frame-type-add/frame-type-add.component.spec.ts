import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeAddComponent } from './frame-type-add.component';

describe('FrameTypeAddComponent', () => {
  let component: FrameTypeAddComponent;
  let fixture: ComponentFixture<FrameTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
