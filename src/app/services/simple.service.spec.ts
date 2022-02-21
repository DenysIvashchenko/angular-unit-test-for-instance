import { TestBed } from '@angular/core/testing';
import { CheckValueService } from './check-value.service';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;
  let fakeCheckService = { check: () => true }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleService, 
        { provide: CheckValueService, useValue: fakeCheckService}
      ]
    });
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a sum of two argument', () => {
    const sum = service.sum(1, 3);
    expect(sum).toBe(4);
  });

  it('should return undefined if an argument is missing', () => {
    const sum = service.sum(2);
    expect(sum).toBeUndefined();
  })

});
