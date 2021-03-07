import { TestBed } from '@angular/core/testing';

import { StockSousseService } from './stock-sousse.service';

describe('StockSousseService', () => {
  let service: StockSousseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSousseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
