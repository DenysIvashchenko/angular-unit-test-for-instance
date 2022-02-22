import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  private nameValue!: string;

  public get name (): string {
    return this.nameValue;
  }
  
  public set name (v : string) {
    this.nameValue = v;
  }
  
  constructor() {
    this.nameValue = 'Mike';
   }
}
