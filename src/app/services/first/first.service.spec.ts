import { TestBed } from '@angular/core/testing';

import { FirstService } from './first.service';

describe('FirstService', () => {
  let service: FirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return value', () => {
    const result = service.returnValue(2)
    expect(result).toBe('three');
  });
});
