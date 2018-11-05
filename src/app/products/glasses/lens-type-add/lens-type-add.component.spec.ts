import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensTypeAddComponent } from './lens-type-add.component';

describe('LensTypeAddComponent', () => {
  let component: LensTypeAddComponent;
  let fixture: ComponentFixture<LensTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
