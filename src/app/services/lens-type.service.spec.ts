import { TestBed } from '@angular/core/testing';

import { LensTypeService } from './lens-type.service';

describe('LensTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LensTypeService = TestBed.get(LensTypeService);
    expect(service).toBeTruthy();
  });
});
