import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  private nameValue!: string;
  public age!: number;

  public get name (): string {
    return this.nameValue;
  }
  
  public set name (v : string) {
    this.nameValue = v;
  }
  
  constructor() {
    this.nameValue = 'Mike';
    this.age = 5;
   }

  public doSomeThing(): void {
    console.log('do some thing');
  } 

  public doSomeThingElse(): void {
    console.log('do some thing else');
  } 
}
