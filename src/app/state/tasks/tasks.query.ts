import {Injectable} from '@angular/core';
import {HashMap, QueryEntity} from '@datorama/akita';
import {TasksStore} from './tasks.store';
import {TaskModelForJoin, TasksState} from './task.model';
import {CategoryModel} from '../../models/category.model';
import {CategoriesQuery} from '../categories/categories.query';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TasksQuery extends QueryEntity<TasksState> {

  constructor(protected store: TasksStore,
              private categoriesQuery: CategoriesQuery) {
    super(store);
  }

  joinedTasks$ = combineLatest([
      this.selectAll(),
      this.categoriesQuery.selectAll({asObject: true})
    ]
  ).pipe(map(joinItems));
}

function joinItems([tasks, categories]: [TaskModelForJoin[], HashMap<CategoryModel>]) {
  return tasks.map(task => {
    const category = categories[task.category_id];
    return {
      ...task,
      category: category.name,
      color: category.color
    };
  });
}
