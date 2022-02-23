import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap, catchError, map } from 'rxjs';
import { Task } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskApi = 'https://621451ec89fad53b1f105e63.mockapi.io/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getTasks() :Observable<Task[]> {
    return this.http.get<Task[]>(this.taskApi).pipe(
      tap(tasks => tasks),
      catchError(error => of([])),
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskApi, task, this.httpOptions).pipe(
      tap(task => task),
      catchError(error => of())
    )
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.taskApi}/${id}`, this.httpOptions).pipe(
      tap(selectedTask => selectedTask),
      catchError(error => of())
    )
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put<Task>(`${this.taskApi}/${task.id}`, task, this.httpOptions).pipe(
      tap(),
      catchError(error => of())
    )
  }

  constructor(
    private http: HttpClient
  ) { }
}
