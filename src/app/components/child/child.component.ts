import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  private _item!: number;

  @Input() set item(val: number) {
    this._item = val * 2;
    console.log('set child item')
  }

  get item(): number {
    return this._item;
  }

}
