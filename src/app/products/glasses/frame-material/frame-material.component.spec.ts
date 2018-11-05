import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMaterialComponent } from './frame-material.component';

describe('FrameMaterialComponent', () => {
  let component: FrameMaterialComponent;
  let fixture: ComponentFixture<FrameMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
