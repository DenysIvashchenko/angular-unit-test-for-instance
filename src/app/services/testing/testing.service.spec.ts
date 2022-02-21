import { TestBed } from '@angular/core/testing';
import { FirstService } from '../first/first.service';


import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;
  let firstService: FirstService;
  let firstReturnValueSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ TestingService ]
    });
    service = TestBed.inject(TestingService);
    firstService = TestBed.inject(FirstService);
    firstReturnValueSpy = spyOn(firstService, 'returnValue');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value dy index original method', () => {
    firstReturnValueSpy.and.returnValue('one');
    const result = service.getValue(0);
    expect(result).toBe('one');
  });

  it('should \'getValue\' return value by index with spyOn and callFake', () => {
    firstReturnValueSpy.and.callFake(() => 'two'); // or ...and.returnValue('two');
    const result = service.getValue(1);
    expect(result).toBe('two');
  });

  it('should \'getValue\' return value by index with spyOn and callThough', () => {
    firstReturnValueSpy.and.callThrough(); // call original method of first service
    const result = service.getValue(2);
    expect(result).toBe('three');
  });

  it('should return value with index what returns getIndex', () => {
    firstReturnValueSpy.and.returnValue('one');
    spyOn(service, 'getIndex').and.returnValue(0)
    const result = service.getValue(service.getIndex());
    expect(result).toBe('one');
  });
});
