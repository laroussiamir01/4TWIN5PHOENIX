import { TestBed } from '@angular/core/testing';

import { MCommunService } from './m-commun.service';

describe('MCommunService', () => {
  let service: MCommunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCommunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
