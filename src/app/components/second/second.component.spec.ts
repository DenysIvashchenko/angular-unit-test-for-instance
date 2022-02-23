import { FirstService } from './../../services/first/first.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondComponent } from './second.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  const fakeFirstService = jasmine.createSpyObj('FirstService', ['start', 'startSecond']);

  beforeEach(async () => {
    TestBed.overrideComponent(SecondComponent, { set: { providers: [
      { provide: FirstService, useValue: fakeFirstService }
    ] }})
    await TestBed.configureTestingModule({
      declarations: [ SecondComponent ],
      imports:[ ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fakeFirstService.startSecond.and.callFake(() => console.log('it called fake dependency second'));
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
