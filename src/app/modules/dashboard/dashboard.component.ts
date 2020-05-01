import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from './components/create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService, public dialog: MatDialog) {
  }

  tasks: Observable<TaskModel[]>;
  selectedTask: TaskModel;

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  selectTask(task: TaskModel) {
    this.selectedTask ? (this.selectedTask.id !== task.id ? this.selectedTask = task : this.selectedTask = null) : this.selectedTask = task;
    console.log(this.selectedTask);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }
}

