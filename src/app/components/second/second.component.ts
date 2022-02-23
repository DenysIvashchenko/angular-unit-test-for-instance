import { FirstService } from './../../services/first/first.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [FirstService]
})
export class SecondComponent implements OnInit {
  form: FormGroup;

  constructor( private fd: FirstService ) { 
    this.form = new FormGroup({
      name: new FormControl(),
      age: new FormControl()
    })
  }

  ngOnInit(): void {
    this.fd.startSecond();
    this.form.valueChanges.subscribe((v) => console.log(v))
  }

}
