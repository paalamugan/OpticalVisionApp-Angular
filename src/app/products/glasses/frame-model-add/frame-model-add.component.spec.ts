import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameModelAddComponent } from './frame-model-add.component';

describe('FrameModelAddComponent', () => {
  let component: FrameModelAddComponent;
  let fixture: ComponentFixture<FrameModelAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameModelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameModelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
