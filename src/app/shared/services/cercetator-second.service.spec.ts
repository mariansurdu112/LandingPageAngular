import { TestBed } from '@angular/core/testing';

import { CercetatorSecondService } from './cercetator-second.service';

describe('CercetatorSecondService', () => {
  let service: CercetatorSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CercetatorSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
