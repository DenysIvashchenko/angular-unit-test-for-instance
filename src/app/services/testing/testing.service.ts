import { FirstService } from '../first/first.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private firstService: FirstService) { 
    this.firstService.initValue();
    this.firstService.alertSomeText('some text');
  }

  getValue(index: number): string {
    return this.firstService.returnValue(index);
  }

  getIndex(): number {
    return 2;
  }

  callAlert(message: string): void {
    this.firstService.alertSomeText(message);
  }
}
