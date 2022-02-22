import { FirstService } from './../first/first.service';
import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;
  const fakeFirstService = {
    get name(): string { return '' },
    set name(v: string) { }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestingService,
        { provide: FirstService, useValue: fakeFirstService }
      ]
    });
    service = TestBed.inject(TestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "hi, Mike" if name equal Mike', () => {
    spyOnProperty(fakeFirstService, 'name', 'get').and.returnValue('Mike');
    const result = service.sayHi();
    expect(result).toBe('hi, Mike');
  });

  it('setName should set value to setter name', () => {
    const setterSpy = spyOnProperty(fakeFirstService, 'name', 'set').and.callThrough();
    service.setName('Joe');
    expect(setterSpy).toHaveBeenCalledWith('Joe');
  });
});
