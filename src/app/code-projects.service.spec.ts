import { TestBed } from '@angular/core/testing';

import { CodeProjectsService } from './code-projects.service';

describe('CodeProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeProjectsService = TestBed.get(CodeProjectsService);
    expect(service).toBeTruthy();
  });
});
