import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from '../../models/task-model';
import { TaskService } from '../../services/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks?: Task[];

  @Output() getTasks = new EventEmitter<Task[]>();

  deleteTask(task: Task): void {
    if (this.tasks) {
      this.tasks = this.tasks.filter(t => t !== task);
      this.taskService.deleteTask(task.id).subscribe();
      this.getTasks.emit(this.tasks)
    }
  }

  checkDone(task: Task): void {
    if (task.done === true) {
      task.done = false
    } else {
      task.done = true;
    }
    this.taskService.updateTask(task).subscribe()
  }

  constructor(
    private taskService: TaskService
  ) { }
  
  ngOnInit(): void {
  }

}
