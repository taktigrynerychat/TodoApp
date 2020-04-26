import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from './components/create-task-dialog/create-task-dialog.component';
import {DashboardService} from "./state/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DashboardService, public dialog: MatDialog) {
  }

  tasks: Observable<TaskModel[]>;

  ngOnInit(): void {
    this.tasks = this.dataService.fetchTasks();
  }

  log(a) {
    console.log(a);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }
}

