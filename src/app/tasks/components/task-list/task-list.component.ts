import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks?: Task[];

  constructor(
  ) { }
  identify(index: any, item: any) {
    return item.id;
  }
  ngOnInit(): void {
  }

}
