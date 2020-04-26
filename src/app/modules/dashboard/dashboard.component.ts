import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from "./components/create-task-dialog/create-task-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService, public dialog: MatDialog) {
  }

  tasks: Observable<TaskModel[]>;

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  log(a) {
    console.log(a);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }
}

