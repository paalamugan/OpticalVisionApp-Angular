import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMaterialEditComponent } from './frame-material-edit.component';

describe('FrameMaterialEditComponent', () => {
  let component: FrameMaterialEditComponent;
  let fixture: ComponentFixture<FrameMaterialEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMaterialEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMaterialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
