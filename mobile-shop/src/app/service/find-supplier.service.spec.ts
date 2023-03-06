import { TestBed } from '@angular/core/testing';

import { FindSupplierService } from './find-supplier.service';

describe('FindSupplierService', () => {
  let service: FindSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
