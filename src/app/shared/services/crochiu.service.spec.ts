import { TestBed } from '@angular/core/testing';

import { CrochiuService } from './crochiu.service';

describe('CrochiuService', () => {
  let service: CrochiuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrochiuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
