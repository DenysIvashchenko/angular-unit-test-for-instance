import { FirstService } from './../first/first.service';
import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService version 3', () => {
    let service: TestingService;
    const fakeFirstService = {
      ...jasmine.createSpyObj('FirstService', ['doSomeThing','doSomeThingElse'], ['name']),
      age: 0
    }
    Object.defineProperty(fakeFirstService, "name", { get: () => "", set: () => {}, configurable: true });

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

    spyOnProperty(fakeFirstService, 'name', 'get').and.returnValue('Mike');
    const result = service.sayHi();
    expect(result).toBe('hi, Mike');
  });

  it('setName should set value to setter name', () => {

    const setterSpy = spyOnProperty(fakeFirstService, 'name', 'set').and.callThrough();
    service.setName('Joe');
    expect(setterSpy).toHaveBeenCalledWith('Joe');
  });

  it('should return value 18 from returnAge', () => {
      fakeFirstService.age = 18;
      const age = service.returnAge();
      expect(age).toBe(18);
  })
});
