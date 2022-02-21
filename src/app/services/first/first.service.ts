import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  private _defaultValue!: string;

  constructor() { }

  get defaultString(): string {
    return this._defaultValue;
  }

  public returnValue(index: number): string {
    const value: string[] = ['one', 'two', 'three'];
    return value[index];
  }

  public initValue(): void {
    this._defaultValue = 'one';
  }
}
