import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensTypeComponent } from './lens-type.component';

describe('LensTypeComponent', () => {
  let component: LensTypeComponent;
  let fixture: ComponentFixture<LensTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
