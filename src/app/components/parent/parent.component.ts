import { ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit, DoCheck, OnChanges {
 
  @Input() title: string = 'some title';

  @Input() arr: number[] = [];

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('init');

    setTimeout(() => {
      this.title = 'changed from set timeout';
      this.ref.markForCheck();
    }, 1000)
  };

  ngDoCheck(): void {
      console.log('doCheck');
      console.log(this.title, this.arr);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes, 'ngOnChange');
  }
}
