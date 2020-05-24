import { TestBed } from '@angular/core/testing';

import { OmService } from './om.service';

describe('OmService', () => {
  let service: OmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
