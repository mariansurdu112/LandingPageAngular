import { TestBed } from '@angular/core/testing';

import { CribaService } from './criba.service';

describe('CribaService', () => {
  let service: CribaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CribaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
