import { TestBed } from '@angular/core/testing';

import { VimeoVideosService } from './vimeo-videos.service';

describe('VimeoVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VimeoVideosService = TestBed.get(VimeoVideosService);
    expect(service).toBeTruthy();
  });
});
