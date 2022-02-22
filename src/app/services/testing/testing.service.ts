import { FirstService } from './../first/first.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private first: FirstService) { }

  public sayHi(): string {
    const name = this.first.name;

    if(name === 'Mike') {
      return 'hi, Mike'
    } else {
      return 'hi stranger'
    }
  }

  public setName(v: string) {
    this.first.name = v;
  }

  public returnAge(): number {
    return this.first.age;
  }
}
