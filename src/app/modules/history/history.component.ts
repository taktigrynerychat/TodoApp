import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from '../../models/task.model';
import {map, takeUntil} from 'rxjs/operators';
import {TasksService} from '../../state/tasks/tasks.service';
import {TasksQuery} from '../../state/tasks/tasks.query';
import {CategoriesService} from '../../state/categories/categories.service';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit, OnDestroy {

  tasks: Observable<TaskModel[]>;
  private unsub = new Subject();

  constructor(private tasksService: TasksService,
              private tasksQuery: TasksQuery,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.tasks = this.tasksQuery.doneTasks$;
    this.categoriesService.getUserCategories().pipe(takeUntil(this.unsub)).subscribe();
    this.tasksService.getAllTasks().pipe(takeUntil(this.unsub)).subscribe();
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }

}
