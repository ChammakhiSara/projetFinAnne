import { TestBed } from '@angular/core/testing';

import { StockTotaleService } from './stock-totale.service';

describe('StockTotaleService', () => {
  let service: StockTotaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTotaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
