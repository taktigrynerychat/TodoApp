import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {TaskService} from '../../../services/task.service';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from '../../../models/task.model';
import {DTaskStore} from './dashboard.store';

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(private dashboardStore: DTaskStore,
              private taskService: TaskService) {
  }

  public fetchTasks(): Observable<TaskModel[]> {
    return this.taskService.getAllTasks()
      .pipe(
        tap(discrepancies => {
          this.dashboardStore.set(discrepancies);
        })
      );
  }
}
