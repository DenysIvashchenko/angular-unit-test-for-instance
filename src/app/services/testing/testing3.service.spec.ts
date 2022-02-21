import { TestBed } from '@angular/core/testing';
import { FirstService } from '../first/first.service';


import { TestingService } from './testing.service';

describe('TestingService version 3', () => {
  let service: TestingService;
  let firstService: FirstService;

  const fakeFirstService = jasmine.createSpyObj('firstService',['returnValue','initValue','alertSomeText'])

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
    fakeFirstService.alertSomeText.calls.reset();
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

  it('should call method callAlert', () => {
    spyOn(service, 'callAlert').and.callThrough();
    service.callAlert('some text');
    expect(service.callAlert).toHaveBeenCalledWith('some text');
  })
});
