import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  public start(): void {
    console.log(' it is real second dependency service');
  }
}
