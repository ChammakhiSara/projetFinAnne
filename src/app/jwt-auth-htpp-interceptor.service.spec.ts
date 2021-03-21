import { TestBed } from '@angular/core/testing';

import { JwtAuthHtppInterceptorService } from './jwt-auth-htpp-interceptor.service';

describe('JwtAuthHtppInterceptorService', () => {
  let service: JwtAuthHtppInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthHtppInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
