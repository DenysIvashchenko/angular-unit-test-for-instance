import { SecondService } from './../second/second.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor( private sd: SecondService) { }

  public start(): void {
    console.log('first dependency service');
  }

  public startSecond(): void {
    this.sd.start();
  }
}
