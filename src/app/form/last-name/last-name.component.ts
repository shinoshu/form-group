import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {
  @Input() lastName: FormControl;

  constructor() { }

  ngOnInit() {
  }
}
