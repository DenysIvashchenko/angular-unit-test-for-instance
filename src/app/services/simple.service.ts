import { Injectable } from '@angular/core';
import { CheckValueService } from './check-value.service';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor(private checkValueService: CheckValueService) { }

  public sum(arg1?: number, arg2?: number): number | undefined {
    if(!arg2) {
      return undefined
    }
    if(!arg1) {
      return 22;
    }
      return arg1 + arg2!
  }

  public check(): boolean {
    return this.checkValueService.check();
  }
}
