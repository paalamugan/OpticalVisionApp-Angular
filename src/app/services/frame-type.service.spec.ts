import { TestBed } from '@angular/core/testing';

import { FrameTypeService } from './frame-type.service';

describe('FrameTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrameTypeService = TestBed.get(FrameTypeService);
    expect(service).toBeTruthy();
  });
});
