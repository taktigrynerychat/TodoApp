import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from './components/create-task-dialog/create-task-dialog.component';
import {DashboardService} from "./state/dashboard.service";
import {DashboardQuery} from "./state/dashboard.query";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {Subject} from "rxjs/internal/Subject";
import {takeUntil} from "rxjs/operators";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private dataService: DashboardService,
              public dialog: MatDialog,
              private query: DashboardQuery) {
  }

  tasks: Observable<TaskModel[]>;
  private subs = new Subscription();

  ngOnInit(): void {
    this.tasks = this.query.selectAll();
  }

  log(a) {
    console.log(a);
  }

  taskCheck(e: MatCheckboxChange, task: TaskModel) {
    console.log(task);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

