import { TestBed } from '@angular/core/testing';

import { YearmovieService } from './yearmovie.service';

describe('YearmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YearmovieService = TestBed.get(YearmovieService);
    expect(service).toBeTruthy();
  });
});
