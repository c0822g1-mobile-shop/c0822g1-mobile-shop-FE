import { TestBed } from '@angular/core/testing';

import { WarehousingService } from './warehousing.service';

describe('WarehousingService', () => {
  let service: WarehousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
