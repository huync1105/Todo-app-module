import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { EtcComponent } from './pages/etc/etc.component';
import { ClearBtnComponent } from './components/clear-btn/clear-btn.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { InputComponent } from './components/input/input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { DelBtnComponent } from './components/del-btn/del-btn.component';
import { FormsModule } from '@angular/forms';
import { DoneBtnComponent } from './components/done-btn/done-btn.component';


@NgModule({
  declarations: [
    HomeComponent,
    EtcComponent,
    ClearBtnComponent,
    AddBtnComponent,
    InputComponent,
    TaskListComponent,
    DelBtnComponent,
    DoneBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    HomeComponent,
    InputComponent,
    ClearBtnComponent,
    AddBtnComponent,
  ]
})
export class TasksModule { }
