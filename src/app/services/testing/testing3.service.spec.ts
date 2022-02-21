import { TestBed } from '@angular/core/testing';
import { FirstService } from '../first/first.service';


import { TestingService } from './testing.service';

describe('TestingService version 3', () => {
  let service: TestingService;
  let firstService: FirstService;

  const fakeFirstService = jasmine.createSpyObj(['returnValue','initValue'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        TestingService,
      { provide: firstService, useValue: fakeFirstService }
      ]
    });
    service = TestBed.inject(TestingService);
    firstService = TestBed.inject(FirstService);
    fakeFirstService.returnValue.and.returnValue('one');
  });

  it('should return value dy index method 3', () => {
    const result = service.getValue(1);
    expect(result).toBe('two');
  }); 
  
  it('should return value dy index original method 3', () => {
    fakeFirstService.returnValue.and.returnValue('one');
    const result = service.getValue(0);
    expect(result).toBe('one');
  });
});
