import {Injectable} from '@angular/core';
import {createInitialState, TasksState} from './task.model';
import {EntityStore, StoreConfig} from '@datorama/akita';


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'tasks', idKey: 'category_id', resettable: true})
export class TasksStore extends EntityStore<TasksState> {

  constructor() {
    super(createInitialState());
  }

}

