import { TestBed } from '@angular/core/testing';

import { ArhitectService } from './arhitect.service';

describe('ArhitectService', () => {
  let service: ArhitectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArhitectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
