import { TestBed } from '@angular/core/testing';

import { FrameMaterialService } from './frame-material.service';

describe('FrameMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrameMaterialService = TestBed.get(FrameMaterialService);
    expect(service).toBeTruthy();
  });
});
