import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMaterialAddComponent } from './frame-material-add.component';

describe('FrameMaterialAddComponent', () => {
  let component: FrameMaterialAddComponent;
  let fixture: ComponentFixture<FrameMaterialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMaterialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMaterialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
