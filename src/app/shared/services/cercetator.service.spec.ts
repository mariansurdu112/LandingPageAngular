import { TestBed } from '@angular/core/testing';

import { CercetatorService } from './cercetator.service';

describe('CercetatorService', () => {
  let service: CercetatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CercetatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
