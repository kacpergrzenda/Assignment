import { TestBed } from '@angular/core/testing';

import { ComedymovieService } from './comedymovie.service';

describe('ComedymovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComedymovieService = TestBed.get(ComedymovieService);
    expect(service).toBeTruthy();
  });
});
