import { Component } from '@angular/core';
import { User } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'unit-test';

  public vasya: User = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
  }

  public arr: number[] = [ 1, 2, 3, 4, 5 ];

  modifyArr(): void {
    this.arr = [...this.arr, 7]
  }

  public btnFromPatent(event: string): void {
    console.log(event + ' here is from parent');
  }
}
