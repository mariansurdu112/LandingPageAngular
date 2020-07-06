import { TestBed } from '@angular/core/testing';

import { ProfessorSecondService } from './professor-second.service';

describe('ProfessorSecondService', () => {
  let service: ProfessorSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
