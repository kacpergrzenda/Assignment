import { TestBed } from '@angular/core/testing';

import { CrimemovieService } from './crimemovie.service';

describe('CrimemovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrimemovieService = TestBed.get(CrimemovieService);
    expect(service).toBeTruthy();
  });
});
