import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModelEditComponent } from './box-model-edit.component';

describe('BoxModelEditComponent', () => {
  let component: BoxModelEditComponent;
  let fixture: ComponentFixture<BoxModelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxModelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxModelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
