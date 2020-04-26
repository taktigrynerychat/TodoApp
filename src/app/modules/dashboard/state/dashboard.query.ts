import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {DTaskStore} from './dashboard.store';
import {DTaskState} from './dashboard.model';

@Injectable({providedIn: 'root'})
export class DashboardQuery extends QueryEntity<DTaskState> {

  constructor(protected store: DTaskStore) {
    super(store);
  }

}
