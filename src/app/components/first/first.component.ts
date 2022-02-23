import { User } from './../../interface/user.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirstService } from 'src/app/services/first/first.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  @Input() user!: User;

  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fd: FirstService) {
    this.fd.start();
  }

  get userFirstName(): string {
    return this.user.firstName;
  }

  get userLastName(): string | undefined{
    return this.user.lastName;
  }

  get isFill(): boolean {
    return !!(this.user.firstName && this.user.lastName)
  }

  public onButtonClick(): void {
    this.buttonClick.emit(this.user.firstName);
  }

}
