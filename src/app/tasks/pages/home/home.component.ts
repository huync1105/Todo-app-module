import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Task } from '../../models/task-model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // input value


  // tasks data
  tasks: Task[] = [];

  // get task
  getTask() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks  ;
    }
    )
  }

  // add task
  addTask(content: string): void {
    content = content.trim();
    if (!content) {return};
    this.taskService.addTask({content} as unknown as Task).subscribe(tasks => this.tasks = tasks)
  }

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

}
