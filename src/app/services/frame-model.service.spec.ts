import { TestBed } from '@angular/core/testing';

import { FrameModelService } from './frame-model.service';

describe('FrameModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrameModelService = TestBed.get(FrameModelService);
    expect(service).toBeTruthy();
  });
});
