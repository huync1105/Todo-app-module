import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-btn',
  templateUrl: './done-btn.component.html',
  styleUrls: ['./done-btn.component.css']
})
export class DoneBtnComponent implements OnInit {

  @Input() done: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
