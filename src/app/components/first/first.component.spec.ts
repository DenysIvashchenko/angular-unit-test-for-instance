import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FirstService } from 'src/app/services/first/first.service';
import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  const fakeFirstService = jasmine.createSpyObj('FirstService',['start', 'startSecond']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ],
      providers: [
        { provide: FirstService, useValue: fakeFirstService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fakeFirstService.start.and.callFake(() => console.log('it called fake dependency'));

    component.user = {
      firstName: 'John',
      lastName: 'Weak'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return lastName and firstName', () => {
    component.user = {
      firstName: 'John',
      lastName: 'Dou'
    }
    expect(component.userFirstName).toBe('John');
    expect(component.userLastName).toBe('Dou');
  });

  it('should emit value from buttonClick', () => {
    const event = spyOn(component.buttonClick, 'emit');
    component.onButtonClick();
    expect(event).toHaveBeenCalledWith('John');
  });

  it('should emit value from button on template', () => {
    const event = spyOn(component.buttonClick, 'emit');
    const btn = fixture.debugElement.query(By.css('button'));
    event.calls.reset();
    btn.nativeElement.click();
    expect(event).toHaveBeenCalledWith('John');
  });

  it('ngClass should add class fill if firstName and lastName exist', () => {
    const newUser = {
      firstName: 'Olya',
      lastName: undefined
    }
    component.user = newUser;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span.fill'));
    expect(span).toBeNull();
  });
});
