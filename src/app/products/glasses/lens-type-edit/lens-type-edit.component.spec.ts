import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensTypeEditComponent } from './lens-type-edit.component';

describe('LensTypeEditComponent', () => {
  let component: LensTypeEditComponent;
  let fixture: ComponentFixture<LensTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
