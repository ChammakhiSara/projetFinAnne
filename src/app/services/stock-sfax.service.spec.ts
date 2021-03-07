import { TestBed } from '@angular/core/testing';

import { StockSfaxService } from './stock-sfax.service';

describe('StockSfaxService', () => {
  let service: StockSfaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSfaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
