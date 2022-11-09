import { TestBed } from '@angular/core/testing';

import { MaruchanService } from './maruchan.service';

describe('MaruchanService', () => {
  let service: MaruchanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaruchanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
