import {Injectable} from '@angular/core';
import {TasksStore} from './tasks.store';
import {tap} from 'rxjs/operators';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from '../../models/task.model';
import {TasksQuery} from './tasks.query';
import {of} from 'rxjs/internal/observable/of';

@Injectable({providedIn: 'root'})
export class TasksService {

  constructor(private tasksStore: TasksStore,
              private taskService: TaskService,
              private tasksQuery: TasksQuery) {
  }

  getAllTasks(): Observable<TaskModel[]> {
    if (this.tasksQuery.getHasCache()) {
      return of();
    }
    return this.taskService.getAllTasks().pipe(tap(tasks => {
      this.tasksStore.set(tasks);
    }));
  }

  createUserTask(task: TaskModel): Observable<number> {
    return this.taskService.createUserTask(task).pipe(tap(status => {
      if (status === 200) {
        this.tasksStore.add(task);
        this.tasksStore.setActive(task.id);
      }
    }));
  }

  updateUserTask(task: TaskModel): Observable<number> {
    return this.taskService.updateUserTask(task).pipe(tap(status => {
      if (status === 200) {
        this.tasksStore.update(task.id, task);
      }
    }));
  }
}
