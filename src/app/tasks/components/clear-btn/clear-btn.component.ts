import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task-model';

@Component({
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  styleUrls: ['./clear-btn.component.css']
})
export class ClearBtnComponent implements OnInit {

  @Input() tasks?: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
