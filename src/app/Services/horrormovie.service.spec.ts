import { TestBed } from '@angular/core/testing';

import { HorrormovieService } from './horrormovie.service';

describe('HorrormovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorrormovieService = TestBed.get(HorrormovieService);
    expect(service).toBeTruthy();
  });
});
