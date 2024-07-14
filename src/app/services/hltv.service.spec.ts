import { TestBed } from '@angular/core/testing';

import { HltvService } from './hltv.service';

describe('HltvService', () => {
  let service: HltvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HltvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
