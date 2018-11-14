import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameModelComponent } from './frame-model.component';

describe('FrameModelComponent', () => {
  let component: FrameModelComponent;
  let fixture: ComponentFixture<FrameModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
