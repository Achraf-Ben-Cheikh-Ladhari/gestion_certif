import { TestBed } from '@angular/core/testing';

import { AbsentService } from './absent.service';

describe('AbsentService', () => {
  let service: AbsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
