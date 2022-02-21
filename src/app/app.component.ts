import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'unit-test';

  public arr: number[] = [1,2,3,4,5];
  public count: number = 5;

  modifyArr(): void {
    this.count++;
    this.arr = [...this.arr, this.count]
  }
}
