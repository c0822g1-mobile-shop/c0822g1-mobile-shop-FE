import { TestBed } from '@angular/core/testing';

import { ScanQrCodeService } from './scan-qr-code.service';

describe('ScanQrCodeService', () => {
  let service: ScanQrCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanQrCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
