import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {DTaskStore} from './dashboard.store';
import {DTaskState} from './dashboard.model';
import {map} from 'rxjs/operators';
import {TaskModel} from '../../../models/task.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class DashboardQuery extends QueryEntity<DTaskState> {

  constructor(protected store: DTaskStore) {
    super(store);
  }

  public get history(): Observable<TaskModel[]> {
    return this.selectAll().pipe(map(tasks => tasks.filter((task: TaskModel) => task.is_done)));
  }

}
