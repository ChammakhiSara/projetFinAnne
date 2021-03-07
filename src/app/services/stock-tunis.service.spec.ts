import { TestBed } from '@angular/core/testing';

import { StockTunisService } from './stock-tunis.service';

describe('StockTunisService', () => {
  let service: StockTunisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTunisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
