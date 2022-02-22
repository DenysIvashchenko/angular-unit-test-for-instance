import { FirstService } from './../first/first.service';
import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService version 2', () => {
  let service: TestingService;
  const fakeFirstService = jasmine.createSpyObj('FirstService', ['doSomeThing'], ['name'])

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

  it('should return "hi, Mike" if name equal Mike 2', () => {
      //@ts-ignore
    Object.getOwnPropertyDescriptor(fakeFirstService, 'name').get.and.returnValue('Mike');
    const result = service.sayHi();
    expect(result).toBe('hi, Mike');
  });

  it('setName should set value to setter name', () => {
      //@ts-ignore
    const setterSpy = Object.getOwnPropertyDescriptor(fakeFirstService, 'name').set.and.callThrough();
    service.setName('Joe');
    expect(setterSpy).toHaveBeenCalledWith('Joe');
  });
});
