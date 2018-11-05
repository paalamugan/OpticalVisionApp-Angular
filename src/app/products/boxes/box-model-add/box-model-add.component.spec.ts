import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModelAddComponent } from './box-model-add.component';

describe('BoxModelAddComponent', () => {
  let component: BoxModelAddComponent;
  let fixture: ComponentFixture<BoxModelAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxModelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxModelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
