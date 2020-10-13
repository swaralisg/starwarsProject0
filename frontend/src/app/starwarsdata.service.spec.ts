import { TestBed } from '@angular/core/testing';

import { StarwarsdataService } from './starwarsdata.service';

describe('StarwarsdataService', () => {
  let service: StarwarsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
