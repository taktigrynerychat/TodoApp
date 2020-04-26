import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {DashboardQuery} from '../dashboard/state/dashboard.query';
import {TaskModel} from '../../models/task.model';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  private subs = new Subscription();
  history: Observable<TaskModel[]>;
  constructor(private query: DashboardQuery) { }

  ngOnInit(): void {
    this.history = this.query.history;
  }


}
